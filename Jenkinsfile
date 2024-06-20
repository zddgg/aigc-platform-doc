pipeline {
    agent any

    environment {
        IMAGE_NAME = 'aigc-platform-doc'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    sh 'pnpm install'
                    sh 'pnpm run docs:build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${env.IMAGE_NAME}:${env.IMAGE_TAG}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh """
                    docker stop frontend-container || true
                    docker rm frontend-container || true
                    docker run -d --name ${env.IMAGE_NAME} -p 80:80 ${env.IMAGE_NAME}:${env.IMAGE_TAG}
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
