pipeline {
agent {label "shetty" }
stages {
  stage('checkout') {
    steps {
            git url: "https://github.com/akshayshetty709/multi-container-app.git", branch: "main"
     }
}
 stage ('build') {
    steps {
            docker compose up -d
}
}
}
}
