# ML-Front-End-Test

### Instructions to run

### Instructions:
1. Download or clone
2. Run in console: npm install --save in two both projects (app and api)

### 3. Run projects
## 3.1 For api, run in console: 
       cd api
       node app.js (on http://localhost:8080) (default)

## 3.2 For app, run in console: 
       cd app
       npm start (on on http://localhost:3000) (default)
       
    
### Pre-requirements
1. Node
2. npm
3. Text Editor

### HTTP Requests on client

       searching:   /api/items?q={query}
       
       view product detail: /api/items/{id}
  
  
### HTTP Requests from api to MercadoLibre Api

       searching: https://api.mercadolibre.com/sites/MLA/search?q={query}
       
       view product detail: https://api.mercadolibre.com/items/
                            https://api.mercadolibre.com/items/description


### Project Estructure 

## 1. App
    .
    ├── node_modules
    ├── public                  
    ├── src                                 # Source files
        ├── actions                         # Fetch functions to api
        ├── assets                          # Local Images
        ├── components                      # Components to render         
        ├── fonts                           # Fonts to use
        ├── img                             # Images in views
        ├── routes                          # Define routes of views
        └── styles                          # .sass
    ├── package-lock.json       
    └── package.json                  


## 2. Api
    .
    ├── node_modules
    ├── dist                  
    ├── src                                 # Source files
        ├── controllers                     # .js to define the logic
        └── models                          # model objects
    ├── app.js
    ├── package-lock.json       
    └── package.json
