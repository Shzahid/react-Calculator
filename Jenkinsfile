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

        stage('Deploy to EC2') {
            steps {
                script {
 // SSH into your EC2 instance
            sh 'ssh -i "zahid1122.pem" ubuntu@ec2-18-215-168-45.compute-1.amazonaws.com "rm -rf /path/to/your/project/on/ec2"'

            // Copy your project to your EC2 instance
            sh 'scp -i "zahid1122.pem" -r . ubuntu@ec2-18-215-168-45.compute-1.amazonaws.com:/zahid/projects'

            // Run your project (this will depend on how you start your project)
            sh 'ssh -i "zahid1122.pem" ubuntu@ec2-18-215-168-45.compute-1.amazonaws.com "cd zahid/projects' && npm start"'
                }
            }
        }
    }
}
