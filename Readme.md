## Node Auth by JWT

### For launch project

You need to installed MongoDB database locally, have 'node-jwt-auth' data base and 'users collections'.
You can import user collections from 'mongodb.users.collection.json' file from this repository to recreate structure of fields.
You can use standard connection url to mongodb: MONGO_CONNECTION_URL='mongodb://localhost:27017'


for development:
```` bash
yarn dev:build
MONGO_CONNECTION_URL=<mongo connection url> yarn dev:run
````
and project will be available on http://localhost:1234 

for production:
```` bash
yarn prod:build
MONGO_CONNECTION_URL=<mongo connection url> yarn prod:run
````
