# Nodejs app

# Requirements
* docker
* docker-compose

# Running app
* execute `./script/up.sh`
* enjoy it

# Deployment
* go to `resource-manifests`
* `kubectl create -f nodejs-app-deployment.yaml --record`
* `kubectl create -f nodejs-test-lb.yaml`
