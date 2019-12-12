import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  LoginComponent,
  SignupComponent,
  HomeDetailComponent,
  ImportExcelComponent,
  ManageCompaniesComponent,
  ManageIPOComponent,
  ManageExchangesComponent,
  UserIpoComponent,
  CompareCompanyComponent,
  LogoutComponent,
  ChangepwdComponent,
  // CompareSectorsComponent,
  // OtherComponent
} from './components';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent,
  children: [
    // {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'importExcel', component: ImportExcelComponent},
    {path: 'manageCompanies', component: ManageCompaniesComponent},
    {path: 'manageExchanges', component: ManageExchangesComponent},
    {path: 'manageIPO', component: ManageIPOComponent},
    {path: 'IPOs', component: UserIpoComponent},
    {path: 'compareCompany', component: CompareCompanyComponent},
    // {path: 'compareSectors', component: CompareSectorsComponent},
    // {path: 'other', component: OtherComponent},
    {path: 'changepwd', component: ChangepwdComponent},
    {path: 'logout', component: LogoutComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
