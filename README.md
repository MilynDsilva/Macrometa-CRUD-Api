# Macrometa-DB-API-NodeJs
###
###### "Simple Js API project which includes pulling data from macrometa databse , CRUD operations and displaying / rendering data on EJS view page"
#### - Macrometa Login: https://auth.paas.macrometa.io/
#### - Macrometa Docs: https://macrometa.com/docs/quickstart
#### - Requires an IDE (*VS Code , Sublime Text*) : https://code.visualstudio.com/
#### - Requires Node Js : https://nodejs.org/en/
#### - Requires API end point testing tool (Postman recommended) : https://www.postman.com/downloads/


###### Sample api object body for object insertion (To add new user details) :
```
{
    "firstName": "Demo",
    "lastName": "Demo",
    "email": "Demo@demo.com"
}
```

###### Sample api object body to update existing user details :
```
{
    "key":"demo_key",
    "firstName": "Demo",
    "lastName": "Demo",
    "email": "Demo@demo.com"
}
```
###### Sample api object body to delete an existing user details :
```
{
    "firstName": "Demo"
}
```

###### Install npm module express , axios , bodyparser , and nodemon
###### **To add necessary modules**: ```npm install```
###### **To run**: ```npx nodemon app.js```
###### **Requires ```addresses``` collection in macrometa collections (Document type)**
###### **Requires macrometa credentials for auth (Credentials to be added in .env)**
###### **Server url endpoint**: ```localhost:9090/crud```


###### Details Page
[![macro-crud.png](https://i.postimg.cc/zG18Mb70/macro-crud.png)](https://postimg.cc/0bZTKNLw)# Macrometa-CRUD-Api
