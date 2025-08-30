// import json server
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors'); // <-- add this line

// backend application
const restServer = jsonServer.create();

// router - point to your questions.json file
const router = jsonServer.router(path.join(__dirname, 'questions.json'));

// middleware
const middleware = jsonServer.defaults();

// port
const port = process.env.PORT || 3001;

// use
restServer.use(cors());        // <-- enable CORS for all origins
restServer.use(middleware);
restServer.use(router);

// listen
restServer.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});

