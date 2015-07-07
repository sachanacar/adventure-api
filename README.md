# adventure-api
This is an adventure game played over a REST API

The idea is to give out clues (in a creative manner) on different endpoints and to create a small adventure game that leads to a treasure.

Check out the SOLUTION.md file to make sure the API makes sense to navigate to the treasure.


Don't forget to:

`````
npm install
`````

and

````
npm start
````

API runs on localhost:8000

Example Request
=====
````
curl -X GET 'http://localhost:8000/welcome' -H 'Content-Type: application/json' -H 'Accept: application/json'
````

How to commit
=======

All endpoints will/can be added to /routes/index.js at the moment for simplicity's sake.
