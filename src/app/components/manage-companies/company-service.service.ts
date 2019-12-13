import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { CompanyIPO } from './company';
import { LocalURL } from '../../config/global-config';
import { HandleErrorService } from '../../service/handle-error.service';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  readonly allcompaniesUrl = LocalURL.serverURL + 'search/search/company';
  readonly companyUrl = LocalURL.serverURL + 'companyipo/admin/manage/company';
  readonly currentcompanyUrl = LocalURL.serverURL + 'search/search/company_id';

  constructor(
    private http: HttpClient,
    public handleErrorService: HandleErrorService
  ) { }

  getCompanies(): Observable<any> {
    console.log ('getCompanies success!');
    console.log ('getCompanies', this.allcompaniesUrl);
    return this.http.get<any>(this.allcompaniesUrl)
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleErrorService.handleError),
      );
  }
  addCompany(company: Company): Observable<any> {
    console.log('addCompany() done!');
    console.log('addCompanysUrl', this.companyUrl);
    console.log('AddCompany', company);
    return this.http.post<any>(this.companyUrl, company)
            .pipe(
                retry(1), // retry a failed request up to 1 times
                catchError(this.handleErrorService.handleError),
                );
  }
  addCompanyIpo(companyipo: CompanyIPO): Observable<any> {
    return this.http.post<any>(this.companyUrl, companyipo)
            .pipe(
                retry(1), // retry a failed request up to 1 times
                catchError(this.handleErrorService.handleError),
                );
  }
  getCurrentCompany(companyid: number ): Observable<any> {
    console.log('getCurrentExchange URL', `${this.currentcompanyUrl}/${companyid}`);
    return this.http.get<any>(`${this.currentcompanyUrl}/${companyid}`)
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleErrorService.handleError),
      );
  }

  updateCompany(updatedCompany: Company): Observable<any> {
    console.log('updateCompany() done!');
    console.log('companyUrl', this.companyUrl);
    console.log('updateCompany', updatedCompany);
    return this.http.put(this.companyUrl, updatedCompany)
            .pipe(
                retry(1), // retry a failed request up to 1 times
                catchError(this.handleErrorService.handleError)
            );
  }
}
