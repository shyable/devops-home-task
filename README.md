# Tenable APA Devops Home Task

![alt text](assets/tenable.png
"Tenable LOGO")

## Introduction

This task required simple knowledege of the following topics:

- Linux environment
- CI\CD
- Nginx
- Docker

The task consists of a simple web-app that we will need to containerize and deliver through nginx.

## About the WebApp

The `webapp` directory contains a simple web API based on NodeJS (version 14.17.3) and a static HTML file (used for the frontend).

You can run the backend api simply by running the following commands:

```bash
cd webapp
npm start
```

Which will result in the following output:

```bash
> node index.js

Listening on port 3000...
```

Now you can open up your browser at: `http://localhost:3000/test` and see the following response:

```json
{ "status": "ok" }
```

This simple project comes with tests that can run easily:

```bash
cd webapp
npm test
```

Which will result in the following output:

```bash
> mocha

Warning: Cannot find any files matching pattern "test"


  api
    ✔ should return status ok


  1 passing (2ms)
```

## Containerize and reverse proxy

For this part we will containerize our webapp, and deliver it's static frontend (`webapp/html`) through reverse proxy, based on nginx.

1. Create the required `Dockerfile` to deliver the `webapp` API. Make sure it is available on port 3000.
2. Create a `docker-compose.yml` file, with our webapp and Nginx.
3. The nginx service should deliver our webapp api through the `/api` endpoint.
4. Nginx should deliver the `webapp/html` directory as static content to the parent route. This should result (if running locally), that `http://localhost/index.html` will deliver the `webapp/html/index.html` file. And `http://localhost/api/test` will deliver the API result of the get request `/test`.

If you did everything correctly, you should be able to access the nginx reverse proxy (on your local computer, using the docker-compose you just wrote), click on the `Test the API` and receive a log every-time it is clicked.

![alt text](assets/webapp_example.jpg
"Webapp running example")

## Build the CI\CD process

Build a simple CI\CD process, based on `Github Actions`. The CI process will perform tests on each pull request.
If the CI process passed, and the code was merged back to the `main` branch, deploy it.

For this task, imagine we have a production server running at `fake-devops-task.com` and we should deploy our app there.

Our production server have SSH access with the following credentials:

```bash
username: 'centos'
password: 'fk#z!@dZ'
```

The production server is an EC2 server running our webapp using the `docker-compose` you just built.

Create the CD process that will do the following:

1. Connect to the web-server at `fake-devops-task.com` using SSH.
2. Build the deployment and copy the files required to `fake-devops-task.com` (either through SCP or find a better method).
3. Run the `docker-compose` with the newer version.

**Notice: you don't really need everything to work, just write a psudo code that will do the deployment following the structure of `Github Actions`. Good luck!**
