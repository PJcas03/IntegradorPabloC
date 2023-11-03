const server = require('./app')

const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});




// const http = require("http")
// const PORT = 3001
// const { getCharById } = require('./controllers/getCharById.js')

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')

//     const { url } = req
//     if (url.includes("/rickandmorty/character")) {
//         const id = Number(url.split("/").pop())


//         getCharById(res, id)
//     }

// }).listen(PORT, "localhost")

// const routes = require('./routes/index')
// const morgan = require('morgan')

// const express = require('express');
// const server = express();
// const PORT = 3001;

// server.use(morgan('dev'))

// server.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Credentials', 'true');
//    res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//    );
//    res.header(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//    );
//    next();
// });

// server.use(express.json())

// server.use("/rickandmorty", routes)

