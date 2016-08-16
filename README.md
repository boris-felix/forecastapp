# Forecast App
A simple web application showing the next 5 days forecast of a specific location in the world

![](https://cloud.githubusercontent.com/assets/736122/17691569/28a25bec-638d-11e6-9767-91946800e693.png)

## DESCRIPTION

This version of the application is a bit similar to the IOS Weather app with :
- a highlight section
- the 5 next days forecast detail

## DEVELOPMENT

### REQUIREMENTS

- Node and npm : https://nodejs.org/
- Ruby and compass : http://compass-style.org/install/

When that is done install the npm dependencies :

```
npm install
```

Then for running the http server and the js auto compilation :

```
npm run start:dev
```

For compiling the css, run this into a separate tab

```
compass watch --force
```

### RELEASE TO PRODUCTION

Saying that you have used a CI (Travis, Jenkins or Codeship) and configured it properly, the project have to be entirely pushed on the server into the folder of your preference.

Then connect yourself to the server by SSH and go into this folder.

We assume that you have already installed to the complete docker toolbox. If not install it as described here : https://www.docker.com/products/docker#/linux

Then run this :

```
./deploy/run.prod.sh
```

That will install all the dependencies to build the project (Javascripts files and Css linting and minification) and the http server ( Nginx ) and then run the web server.

### NOTE

You will probably notice that the build are bit long for what it is. If you have the ability to only send to the folder only the public folder with the already compiled files ( let's say that the CI have already done it ), you can just build and start the nginx container :

```
docker-compose build nginx
```

then

```
docker-compose up -d nginx
```

