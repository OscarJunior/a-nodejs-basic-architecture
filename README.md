# NODEJS BASIC ARCHITECTURE

As a heads up, I’m not assuming a supreme knowledge on the subject; the aid of this project is to show some of the **NODE.JS** best practices, to do it we are gonna use a modern approach and obviously put them together in code.
The illustration of these practices is out from the project scope, it is [this repository](https://github.com/goldbergyoni/nodebestpractices) that contains the extended explication of them.

Well, our contribution will be to create a new setup that allows adding, removing, testing and debugging each best practice. There are many ways by which we can create this setup. Based on my experience, I am gonna use **Docker** as cornerstone so it and **Docker Compose** will only be the two technologies we need to install in our local environment (I mean, in our machine).

For this, we gonna use these technologies:

* Docker
* Docker Compose
* MongoDB
* Express
* eslint
* prettier
* vscode
* nodemon

Running the app:

1. Create a new file whose name will be **.envrc**. To keep it’s simple, this file could be a copy from **.envrc.sample**
2. Execute `./script/up.sh`
3. Enjoy it
