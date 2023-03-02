# BE Pastebin Clone API 📝

#### Backend application to produce RESTful API for Pastebin like.



## Features
- The users could create an account using their own email & password
- Can create, read, update, and delete the paste text
- Even create the paste text and share the paste text without login in public mode
- Custom public mode in specific time





## OpenAPI
you could try the Deployed Restful API here https://breezy-crews-report-18-140-65-151.loca.lt/
* please inform me, if the server got down, chat me at [linkedin](https://www.linkedin.com/in/baariq-azhar/)  




## Run locally
Requirements
```bash 
docker
```

Clone the project
```bash 
git clone (url)
```

Go to the project directory
```bash
cd (folder name)
```

Run NodeJs project + MariaDB using Docker (quite take time in first time)
```bash
docker compose up
```

Finally your Pastebin clone has been launch 🚀🚀🚀

Stop the Docker
```bash
docker-compose down
```





## How to use the API
### API Specification

- register (POST)
    - to create user account
    - body
        - email: STRING | abc@abc.com
        - password: STRING | abc
        - repassword: STRING | abc

- login (POST)
    - to enter the system
    - body
        - email: STRING | abc@abc.com
        - password: STRING | abc
    - readAll (POST)
        - to see your all docs
        - body
            - email: STRING | abc@abc.com
            - password: STRING | abc

- read/:doc_uuid (GET)
    - to get paste text in public mode
    - only works in public mode and still within public rage time are true
    - parameter
        - doc_uuid: STRING | 86785351-a27e-4099-90ce-bcb1511caec8        

- create
    - to create the paste text documents
    - body
        - email: STRING | abc@abc.com
        - password: STRING | abc
        - doc_content: TEXT(‘long’) | Yes here’s the note is, this project is cool
        - doc_public_show: BOOLEAN | true
        - doc_public_daterange: STRING | eg: 2023/02/18 11:00 - 2023/02/18 13:00        


- update
    - to update the existing paste text documents
    - body
        - email: STRING | abc@abc.com
        - password: STRING | abc- doc_uuid: STRING | 86785351-a27e-4099-90ce-bcb1511caec8
        - doc_content: TEXT(‘long’) | Yes here’s the note is, this project is cool
        - doc_public_show: BOOLEAN | true
        - doc_public_daterange: STRING | eg: 2023/02/18 11:00 - 2023/02/18 13:00
    
- delete
    - to delete the existing paste text documents
    - body
        - email: STRING | abc@abc.com
        - password: STRING | abc
        - doc_uuid: STRING | 86785351-a27e-4099-90ce-bcb1511caec8- 















## Tech stack

### Backend

- node js 
- express js
- typescript
- sequelize-typescript
- mysql2
- eslint
- prettier
- uuid
- etc


### Database

- MariaDB (MySQL based)


### utilities
- git
- github
- vscode

### devops
- AWS EC2
- docker







## Architecture

sc: documentation/img/AWS EC2.png
![alt text](https://github.com/BaariqAzhar/be-etfax-test/blob/master/documentation/img/AWS%20EC2.png?raw=true)






## Improvement

With all my lack. Because of the limited time. So there are many features that should be improved in the next progress. Such as:
- I missed the testing phase. It should add it to increase quality code.
- Advanced CI/CD tools to improve speed of integration. Auto deploy
- etc





## Author
[@baariqazhar](https://github.com/BaariqAzhar)

