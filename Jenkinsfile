node {
    def app

    stage('Initialize')
    {
        def dockerHome = tool 'myDocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        app = docker.build("petrican/smartybox")
    }

    stage('Deploy stage') {
        def dockerContainer = tool name: "$(docker ps -a -q --filter ancestor=petrican/smartybox --format="{{.ID}}")"
        echo "CONTAINER_ID => ${dockerContainer}"
        // stop the previous container running
        // sh 'if $(docker ps -a -q --filter ancestor=petrican/smartybox --format="{{.ID}}"); then docker stop $(docker ps -a -q --filter ancestor=petrican/smartybox --format="{{.ID}}") else echo 0; fi'
        // // run in a container the image petrican/smartybox
        // sh 'docker run -d --rm -p 1377:80 petrican/smartybox'
    }

    // stage('Build Docker image with no-cache'){
    //  sh 'docker build -t smartybox -f Dockerfile --no-cache .'
    // }

    // stage('Test image') {
    //     /* Ideally, we would run a test framework against our image.
    //      * For this example, we're using a Volkswagen-type approach ;-) */

    //     app.inside {
    //         sh 'echo "Tests passed"'
    //     }
    // }

    


    // stage('Push image') {
    //     /* Finally, we'll push the image with two tags:
    //      * First, the incremental build number from Jenkins
    //      * Second, the 'latest' tag.
    //      * Pushing multiple tags is cheap, as all the layers are reused. */
    //     docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
    //         app.push("${env.BUILD_NUMBER}")
    //         app.push("latest")
    //     }
    // }
}