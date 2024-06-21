pipeline {
  agent {
    kubernetes {
      inheritFrom 'nodejs base'
      containerTemplate {
        name 'nodejs'
        image 'node:20.14.0'
      }

    }

  }
  stages {
    stage('Clone repository') {
      agent none
      steps {
        checkout scm
      }
    }

    stage('Run npm install pnpm') {
      steps {
        container('nodejs') {
          sh 'npm install -g pnpm'
        }

      }
    }

    stage('Run pnpm install') {
      steps {
        container('nodejs') {
          sh 'pnpm install'
        }

      }
    }

    stage('Run test') {
      steps {
        container('nodejs') {
          // sh 'pnpm run test'
          echo 'no test'
        }

      }
    }

    stage('Run build') {
      steps {
        container('nodejs') {
          sh 'pnpm run docs:build'
        }

      }
    }

    stage('Archive artifacts') {
      steps {
        container('base') {
          sh 'zip -r dist.zip .vitepress/dist/'
        }

        archiveArtifacts(artifacts: 'dist.zip', followSymlinks: false)
      }
    }

  }
}
