pipeline {
    agent any

    environment {
        IMAGE_NAME = "aarushi12/react-app"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Container (Test)') {
            steps {
                sh 'docker rm -f react-container || true'
                sh 'docker run -d -p 3001:80 --name react-container $IMAGE_NAME'
            }
        }

    }
}
