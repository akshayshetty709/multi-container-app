pipeline {
agent {label "shetty" }
stages {
  stage('checkout') {
    steps {
            git branch: "https://github.com/akshayshetty709/multi-container-app.git", branch: "main"
     }
}
 stage ('build") {
    steps {
           sh "docker compose up -d"

}
}
stage ('deploy') {
steps {
sh "docker ps"
}
}
}
}
