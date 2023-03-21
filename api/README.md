# MORINGA HUB API
This API provides powers our application, [Moringa Library](https://moringa-library.web.app/). The API is built using Sinatra (Ruby).

## Technologies Used
This application has been built with the following tools:

![ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)


- **Ruby `v2.7.+`**
- **sinatra `v3.0`**
- **activeRecord `v7.0.4`**
- **rake `v13.0.6`**
- **rerun `v0.14`**
- **pg `v1.4.6`**
- **ERB `v4.0`**
- **require_all ` 3.0`**
- **faker`v3.0`**
- **rspec `v3.12`**
- **sqlite3 `v3.0`**


## Project Setup
You can set up this repository by following this manual

1. Clone the repository
    ```{shell}
   git clone https://github.com/sinatra-pod/moringa-library
   ```
2. Ensure the ruby gems are set up in your machine
    ```{shell}
   bundle install
   ```
3. Perform any pending database migrations
   ```{shell}
   rake db:migrate
   ```
4. Run the application
    ```{shell}
    rake start
    ```
5. Open the application from your browser
    ```
   http://localhost:9292
   ```





## Database Setup
Our application uses two main types of databases:

- **PostgreSQL** - Used in all our `development` and `production` environments.
- **SQLite3** - Used when running our tests.

The following section illustrates how to set up PostgreSQL on Debian based Linux distros `Ubuntu, Parrot, Kali Linux etc.`<br/>
You can find alternate installation instructions for a different operating system [here](https://www.postgresql.org/download/).

### Step 1 :- Installing PostgreSQL

Postgres is available from the default repositories of all Debian distributions. You can use `apt` for installation.

- Install Postgres
```
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib
```

- Ensure that the server is running using the systemctl start command:
```{shell}
$ sudo systemctl start postgresql.service
```

### Step 2 :- Using PostgreSQL Roles and Databases

- Switch over to the postgres account on your server by typing:
```{shell}
$ sudo -i -u postgres
```
- Access the Postgres prompt immediately by typing:
```{shell}
$ psql
```
- Exit out of the PostgreSQL prompt by typing:
```{shell}
$ \q
```

### Step 3 (`optional`) :- Setting up a custom user role on Postgres
Since the `postgres` user is the default user upon installation, you can set up a new user to access the db with the application.

- Create a new user, make sure you replace `$USER` with the name of the user you want:
```{shell}
$ sudo -u postgres createuser --superuser $USER
```


## Application

### Folder Structure


    .
    ├── ...
    ├── api                   
    │   ├── app              
    │   ├── config            
    │   ├── db            
    │   ├── spec          
    │   └── ...                 
    └── ...



### MODELS
This section will describe the schema definitions for our database.

#### 1. projects
- All the submissions that have been added onto the library.

| COLUMN           | DATA TYPE                                         | DESCRIPTION                                      | 
|------------------|---------------------------------------------------|--------------------------------------------------|
| id               | Integer                                           | Unique identifier.                               |
| title            | String                                            | The name of the submission(project/article).     |
| category         | String                                            | The category of the submission.                  |
| description      | String                                            | A short description about the submission.        | 
| repository_link  | url                                               | The set due date for the submission.             |
| banner_image     | url                                               | The banner image of the specific submission.     |
| tech_stack       | String                                            | The stack which the submission was built with.   |
| license          | url                                               | The license to the submission.                   |
| createdAt        | Date                                              | The date the submission was created.             |
| status           | ENUM `[SUBMITTED, ON-REVIEW, APPROVED, DECLINED]` | The status of the submission.                    |


#### 2. users

- All the registered user accounts

| COLUMN        | DATA TYPE | DESCRIPTION                           | 
|---------------|-----------|---------------------------------------|
| id            | Integer   | Unique identifier.                    |
| email         | String    | User's email addrress.                |
| password_hash | String    | User's password hashed with `BCrypt`. |
| updated_at    | Date      | The date the user was updated.        |
| createdAt     | Date      | The date the user was created.        |


### ROUTES

- This section describes all the API endpoints including their expected request and response objects.

   
1. `/guest/projects` - List all accepted submissions.

   ```{json}
   --------------
   @METHOD => GET
   --------------
   
   ---------------
   @AUTH => None
   ---------------
   
   ----------------
   @REQUEST => None
   ----------------
   
   -----------------
   @RESPONSE => JSON
   
   {
    "data": [
        {
            "id": 2,
            "title": "The force",
            "category": "Fin-tech",
            "description": "The force is here.",
            "repository_link": "https://github.com/sinatra-pod/the-force",
            "banner_image": "https://calebbii.io/banner.png",
            "tech_stacks": "React, Ruby, Typscript",
            "license": "https://github.com/lisence-moringahub"
            "status": "CREATED"
        }],
    "message": "SUCCESS"
   }

   -----------------
   ```
2. `/guest/projects/search/:query` - Search for accepted submissions that have their titles or description match the `:query` path parameter.

   ```{json}
   --------------
   @METHOD => GET
   --------------
   
   ---------------
   @AUTH => None
   ---------------
   
   ----------------
   @REQUEST => None
   ----------------
   
   -----------------
   @RESPONSE => JSON
   
   {
    "data": [
        {
            "id": 2,
            "title": "The force",
            "category": "Fin-tech",
            "description": "The force is here.",
            "repository_link": "https://github.com/sinatra-pod/the-force",
            "banner_image": "https://calebbii.io/banner.png",
            "tech_stacks": "React, Ruby, Typscript",
            "license": "https://github.com/lisence-moringahub"
            "status": "CREATED"
        }],
    "message": "SUCCESS"
   }

   -----------------
   ```