# THE MORINGA HUB

## DESCRIPTION

**Moringa Hub - API** is a API that is built as a API that features all of the best Moringa School projects done by students and technical mentors.

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
You can setup this repository by following this manual

1. Clone the repository
    ```{shell}
   git clone https://github.com/sinatra-pod/moringa-library
   ```
2. Ensure the ruby gems are setup in your machine
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





## DB setup.

## Step 1 — Installing PostgreSQL
```
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib
```
Ensure that the server is running using the systemctl start command:
```
sudo systemctl start postgresql.service

```

## Step 2 — Using PostgreSQL Roles and Databases
Switch over to the postgres account on your server by typing:
```
sudo -i -u postgres
```
You can now access a Postgres prompt immediately by typing:
```
psql
```

Exit out of the PostgreSQL prompt by typing:
```
\q
```


## Application.
This application is a web API that allows users to:
### Users
A user is an entity that contributes to projects in the library. This is done through making submissions to the library and leaving reviews and ratings on projects.
 
- Users can register/log in to the platform using their email addresses or GitHub accounts.
- Users can add a submission to the library (either a project or an article).
- Users can update their submissions to the library.
- Users can delete their submissions to the library.
- Users can view all their submissions to the library
- Users can check the status of their submission to the library.
- Users can add a rating to an existing project in the library.
- Users can add comments to an existing project in the library.

### Reviewers
A reviewer is an entity that has the ability to perform reviews on existing submissions. They are responsible for contributing to the confirmation or rejection of a submission to the library.


- A reviewer can log in to the platform using their email address. (Based on Moringa School domain)
- A reviewer can add comments about their review.
- A reviewer can approve/reject a submission.


### Admin
An administrator is an entity with the ability to manage accounts for reviewers.

- Create an account for a reviewer.
- Delete a reviewer account.
- Accept submission to the library.


### Backend Folder structure

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
Database schema definitions.

#### SUBMISSIONS

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


#### USER
| COLUMN        | DATA TYPE | DESCRIPTION                           | 
|---------------|-----------|---------------------------------------|
| id            | Integer   | Unique identifier.                    |
| email         | String    | User's email addrress.                |
| password_hash | String    | User's password hashed with `BCrypt`. |
| updated_at    | Date      | The date the user was updated.        |
| createdAt     | Date      | The date the user was created.        |


### ROUTES

   
1. `/projects` - List all Projects Submitted.

   ```{json}
   ## RESPONSE SAMPLE
   {
    "data": [
        {
            "id": 2,
            "title": "The force",
            "category": "Fin-tech",
            "description": "The force is here. A web application for Star Wars fans; get information about all the films in the franchise.",
            "repository_link": "https://github.com/sinatra-pod/the-force",
            "banner_image": "https://calebbii.io/banner.png",
            "tech_stacks": "React, Ruby, Typscript",
            "license": "https://github.com/lisence-moringahub"
            "status": "CREATED"
        }],
    "message": "SUCCESS"
   }
   ```