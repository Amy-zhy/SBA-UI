pipeline {
  agent none
  environment {
    DOCKERHUBNAME = "zhanghongyu423"
  }
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node' 
          args '-p 3000:3000'
        }
      }
      steps {
        echo 'start npm install...'
        bat 'npm install'
        echo 'start npm build...'
        bat 'npm run build'
        echo 'npm install and build successfully!'
      }
    }

    stage('docker build & push & run') {
      agent any
      steps {
        script {
          // def REMOVE_FLAG = sh(returnStdout: true, script: "docker image ls -q *${DOCKERHUBNAME}/sbaamyui*") != ""
          def REMOVE_FLAG = bat(returnStdout: true, script: "docker image ls -q *%REMOVE_FLAG%/sbaamyui*") != ""
          // echo "REMOVE_FLAG: ${REMOVE_FLAG}"
          echo "REMOVE_FLAG: %REMOVE_FLAG%"
          if(REMOVE_FLAG){
            // sh 'docker image rm -f $(docker image ls -q *${DOCKERHUBNAME}/sbaamyui*)'
            bat 'docker image rm -f $(docker image ls -q *%DOCKERHUBNAME%/sbaamyui*)'

          }
        }

        // withCredentials([usernamePassword(credentialsId: 'liker163ID', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
        //   sh 'docker login -u $USERNAME -p $PASSWORD'
        //   sh 'docker image build -t ${DOCKERHUBNAME}/sbaamyui .'
        //   sh 'docker push ${DOCKERHUBNAME}/sbaamyui'
        //   sh 'docker run -d -p 4200:80 --network smc-net --name sbaamyui ${DOCKERHUBNAME}/sbaamyui'
        // }
        withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          echo '$USERNAME + %USERNAME%'
          echo '$PASSWORD + %PASSWORD%'
          bat 'docker login -u %USERNAME% -p %PASSWORD%'
          bat 'docker image build -t %DOCKERHUBNAME%/sbaamyui .'
          bat 'docker push %DOCKERHUBNAME%/sbaamyui'
          bat 'docker run -d -p 4200:80 --name sbaamyui %DOCKERHUBNAME%/sbaamyui'
        }  
      }
    }

    stage('clean workspace') {
      agent any
      steps {
        // clean workspace after job finished
        cleanWs()
      }
    }
  }
}


