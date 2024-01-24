pipeline {
    agent any

    stages {
        stage('Clone GitHub Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ShZahid/react-Calculator/'
            }
        }

        stage('Build and Test') {
            steps {
                script {
                   sh 'npm install' // Install dependencies
sh 'npm run build' // Build your project
sh 'CI=true npm test' // Run tests
                }
            }
        }

        // stage('Deploy to EC2') {
        //     steps {
        //         script {
        //             // Add commands here to deploy your project to your EC2 instance.
        //             // You might use SCP, rsync, or another method depending on your setup.
        //         }
        //     }
        // }
    }
}
