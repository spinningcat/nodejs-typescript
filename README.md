# Opmas Migration

## Briefly

This repo contains model, migration files and also api calls. Express server is implemented. Modular structures is applied.
Server can be started with the command  **npm run opmas-dev**. Please chec package.json.

## Practical Notes

**In package.json, there is a line type:module. You have two options. Either you will use import/export or .cjs extension.**

## Folders and Files

**Extension of migration file is cjs. It seems convenient like that because that will be used one time.**
**Main folders in the project as explain belowed.**

### api: 
This is the place for every api end calls. It is structured with folders. So benefit of structuring api files with folder is you can easily find what you seek.

### config: 
It is what sequelize check when you use npx sequelize-cli db:migrate.

### dbconnection:
dbconnection contains the file that connect and authenticate postgres connection that i use in api calls **(CRUD operation)**

### models: 
Models file is here. All models import necessary file and export a module that is for other files.

### migrations: 
That folder contains all files for creating related table.

### seeders: 
Seeders is just for inserting data manually. You can find example there.

## Useful Commands

npx sequelize-cli model:generate --name Processes --attributes title:string,sourceId:integer,resetTimer:integer,socketId:string,operationStatus:enum:'{disconnected,idle,listening, locked}',status:enum:'{active, passive}'

npx sequelize-cli seed:generate --name user
npx sequelize-cli db:seed:all