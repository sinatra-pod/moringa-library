# THE MORINGA LIBRARY

**THE MORINGA LIBRARY** The Moringa Library is a web application that is built as a repository that features all of the best Moringa School projects done by students and technical mentors.

## REQUIREMENTS

### Prerequisites


## ENVIRONMENT VARIABLES

In order to use the environment variables ensure you create three environment files: `.env`, `.env.development`, `.env.production`

Use the following criteria to set your environment variables:

- `.env` - Common variables that are not specific to any environment.
- `.env.development` - Variables that are only specific to `development` or `test` environments.
- `.env.production` -  Variables that are ONLY specific to production environment. Example: `SENTRY`

```
[ENVIRONMENT_DETAILS]

[DOMAIN]
CURRENT_SITE_DOMAIN=

[SENTRY]
SENTRY_DNS=

[COMMON_API_CREDS]
```


## DOCKERIZE THE APPLICATION
* Run the command below from the terminal depending on the environment needed.
```
[DEV]
docker-compose -f docker-compose-dev.yml up --build -d

[UAT]
docker-compose -f docker-compose-uat.yml up --build -d

[PROD]
docker-compose -f docker-compose-prod.yml up --build -d

```

Meta
----
Authors:
   * **Caleb Bii** - *Initial work* - [Calebbii](https://github.com/Calebbii)
   * [please add you author creds here]

**Status**: `maintained, and is currently in development`

**Version**: `v0.1.0`

**Ruby Version**: `3.0.2`


Usage
-----


## License
This project is licensed under the MIT License

Documentation
-------------
You can see the documentation over at **Read the Docs**

Resources
-------------
