# NodeWebComponent

## Why this project exist ?

- This project show how to work with web components using node, how to create and import the components in other projects if necessary
- This project are super simple, because the principal lesson is how to works

## What the resources this project use

- node
- docker
- docker-compose

## How to run

- Rename the files .env.example to .env, to your servers are started on correct port

- Mode 1 - Can use project pure project.
    - Go to folder in project 1(x-store)
    - npm i && npm run start
    - Go to folder in project 2(car-store)
    - npm i && npm run start

- Mode 2 - Can use Dockerfile
    - Go to folder in project 1(x-store)
    - #docker build . -t web1
    - #docker run -p -p 3000:3000 web1
    - Go to folder in project 2(car-store)
    - #docker build . -t web2
    - #docker run -p -p 3001:3001 web2

- Mode 3 - Can use docker-compose
    - Go to root project
    - #docker-compose build
    - #docker-compose up

## How to access

- Open in browser page one
    - localhost:3000
- Open in browser page two
    - localhost:3001

## What i'm looking
- On localhost:3000 are the main project, who import the webComponents
- On localhost:3001 are the part of project who export the webComponents

## Observation
1. On project main(localhost:3000), in your file public/index.html we import the webComponents on files "car-1.bundle.js & car-1.bundle.js" to works in main project

2. On project aux(localhost:3001) export the webComponents and compile separated of main bundle.js, this configuration are on rootProject/config-override.js
    - The componets are wrapped to are converted on webComponents
    - The file filegen.js is responsable to do this proccess and merge two logics diffents(reactComp. and webComp.)
    
## Consideration

- The CSS are terrible, kkkk i know, but the project is super simples and work well to show your main proposital

- I like of share knowledge, because my questions are questions of somebody too

- Use how you want, enjoy