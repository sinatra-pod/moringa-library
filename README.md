# Moringa Hub

​Welcome to Moringa Hub, home of Moringa's most awesome projects!
This is an application where users can showcase their projects,designs and articles; as well as view and review all kinds of other projects, designs and articles that have been made by other members of the Moringa ecosystem.

## Setup Instructions

### Project Setup

* Clone the repository
    ```
    git clone https://github.com/sinatra-pod/moringa-library.git
    ```
* Navigate to the project folder
    ```
    cd moringa-library
    ```
* To interact with the front-end part of the application, navigate to the webapp folder
    ```
    cd webapp
    ```
* To interact with the back-end part of the application, navigate to the api folder
    ```
    cd api
    ```

### Environment Variables Setup
To use the environment variables, create three environment files: `.env`, `.env.development` and `.env.production`.

Use the following criteria to set your environment variables:
* `.env` -Common variables that are not specific to any environment.
* `.env.development` -Variables that are only specific to `development` or `test` environments.
* `.env.production` -Variables that are only specific to production environment. Example: `ENTRY`.

```
[ENVIRONMENT_DETAILS]

[DOMAIN]
CURRENT_SITE_DOMAIN=

[SENTRY]
SENTRY_DNS=

[COMMON_API_CREDS]
REACT_APP_API_URL=https://myApiServerUrl.com
```
* **DO NOT** commit any of the environment files to version control.

### Docker Setup
* Run the command below from the terminal depending on the environment needed.
```
[DEV]
docker-compose -f docker-compose-dev.yml up --build -d

[UAT]
docker-compose -f docker-compose-uat.yml up --build -d

[PROD]
docker-compose -f docker-compose-prod.yml up --build -d

```


## Technologies Used
* Ruby 
* Sinatra
* React
* Typescript
* Jest
* Firebase
* Github Actions
* Github Projects

## Requirements and Specifications
![node:v0.9.0](https://img.shields.io/badge/node-v0.9.0-blue.svg)
![npm:v8.15.0](https://img.shields.io/badge/npm-v8.15.0-blueviolet.svg)
![ruby:2.7.4](https://img.shields.io/badge/ruby-2.7.4-yellow.svg)
*  `node v0.9.0` and above
* `npm 8.15.0` and above
* `ruby 2.7.4` and above

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

## Collaboration Methodology

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
git commit -m"Login: added JWT token in header"
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

* Once your code is in the remote branch, create a pull request to the `development` branch.
* Each pull request will require at least 1 peer code review approval for the merge to be completed.
* Hurray, you have successfully contributed.



## License
[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  Copyright (c) 2023 **Sinatra Pod**


