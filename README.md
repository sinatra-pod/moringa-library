# Moringa Hub
![GitHub issues](https://img.shields.io/github/issues/sinatra-pod/moringa-library)
![GitHub contributors](https://img.shields.io/github/contributors/sinatra-pod/moringa-library?color=green)
![GitHub repo size](https://img.shields.io/github/repo-size/sinatra-pod/moringa-library?color=violet)

Welcome to Moringa Hub, the home of Moringa's most awesome projects!
This is an application where users can showcase their projects, designs and articles; as well as view and review all kinds of other projects, designs and articles that have been made by other members of the Moringa ecosystem.

## Prerequisites
In order to use this repository, you will need to have the following setup in your computer.

![node:v0.9.0](https://img.shields.io/badge/node-v0.9.0-blue.svg)
![npm:v8.15.0](https://img.shields.io/badge/npm-v8.15.0-blueviolet.svg)
![ruby:2.7.4](https://img.shields.io/badge/ruby-2.7.4-yellow.svg)

*  `node v0.9.0+`
* `npm 8.15.0+`
* `ruby 2.7.4+`


## Setup Instructions

This section will guide you through setting up and running this repository on your local machine.

### Project

* Clone the repository
    ```
    git clone https://github.com/sinatra-pod/moringa-library.git
    ```
* Navigate to the project folder
    ```
    cd moringa-library
    ```
* To interact with the front-end part of the application, navigate to the `webapp` folder
    ```
    cd webapp
    ```
* To interact with the back-end part of the application, navigate to the `api` folder
    ```
    cd api
    ```

### Environment Variables
To use the environment variables, create three environment files: `.env`, `.env.development` and `.env.production`.

Use the following criteria to set your environment variables:
* `.env` - Common variables that are not specific to any environment.
* `.env.development` - Variables that are only specific to `development` or `test` environments.
* `.env.production` - Variables that are only specific to production environment. Example: `ENTRY`.

```{shell}
# DOCKER POSTRESQL DATABASE
DEV_DB_USER='database_username'
DEV_DB_PASSWORD='database_password'
DEV_DB_NAME='database_name'

# DOMAIN
CURRENT_SITE_DOMAIN=http://localhost:8080/

# SENTRY
SENTRY_DNS=8.8.8.8

# COMMON_API_CREDS
REACT_APP_API_URL=https://myApiServerUrl.com
```
NB:
* Ensure you use the prefix `REACT_APP_` to store all the variables that are needed in the React Application. Example: `REACT_APP_NAME=janedoe`
* **DO NOT** commit any of the environment files to version control.

### Docker

This application is built with Docker, you will need to have the following installed in order to use it:
* `Makefile` - Use the link below to install https://makefiletutorial.com/.
* `Docker` - https://www.docker.com/.

1. Build Docker container and start service.
    ```
    make docker-build 
    ```
2. Show logs from container processes.
    ```
    make show-logs
    ```
3. Stop container.
    ```
    make start 
    ```
4. All client sided routes are rendered from root, `/`. Example `http://localhost:8080/admin` - Admin React Page
5. All API endpoints are rendered from `/api/`. Example `http://localhost:8080/api/admin` - Admin endpoint

**NB: All requests are listening from port `8080`.**

## Technologies Used
This application has been built with these technologies:
* Ruby `v2.7.0` 
* Sinatra `v3.0`
* RSpec `v3.1.2`
* React `v18.0`
* Typescript `v4.9.5`
* Jest `v29.5.0`
* Firebase `v9.17.0`
* nginx
* Docker
* GitHub Actions
* GitHub Projects



## Authors
* [Adera Karume](https://github.com/karume629)
* [Albert Byrone](https://github.com/Albert-Byrone)
* [Caleb Kiprotich](https://github.com/Calebbii)
* [Daisy Machoka](https://github.com/Dachoka3000)
* [Dennis Kiboi](https://github.com/dennis-kiboi)
* [Dominic Kiprotich](https://github.com/kiprotichdominic)
* [Ian Okumu](https://github.com/otsembo)
* [Joseph Wambua](https://github.com/mutuajoseph)
* [Kelvin Muriithi](https://github.com/KelvinMuriithi)
* [Titus Muthomi](https://github.com/Kalunge)

## Contribution Guide

In order to contribute to this repository, you need to follow these steps:


* Create a new branch with your name and the feature you are working on. Example: `janedoe/reset-password`
```git
git branch name/feature
```

* Checkout to your branch in order to work on a feature.
```git
git checkout name/feature
```

* Once you have completed your work on the feature, create a commit with a comprehensive message. Example:
```git
git commit -m "Login: added JWT token in header"
```

* Push the changes to the remote repository
```git
git push -u origin name/feature
```

* Ensure you create three environment files: `.env`, `.env.production` and `.env.development`.
**Ensure you add any necessary variables in the appropriate file**. Example:
```
MONGO_DB_URI='random env here'
## DO NOT commit your .env files to version control
```

* Once your code is in the remote branch, create a pull request to the `main` branch.
* Each pull request will require at least 1 peer code review approval for the merge to be completed.
* Hurray, you have successfully contributed.



## License
[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```
MIT License

Copyright (c) 2023 Moringa School

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Copyright (c) 2023 **Sinatra Pod**
