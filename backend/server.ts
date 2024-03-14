const express= require( 'express')
const http= require( 'http')
const bodyParser =require( 'body-parser')
const cookieParser= require( 'cookie-parser')
const compression  =require( 'compression')
const cors = require( 'cors')
const PORT = 3000 || process.env.PORT
const app = express();
require('dotenv').config()

app.use(cors({
    credentials : true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

//add http methods needed for api call on the server
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log("Server is running on port "  + PORT)
})
console.log("Helloe node")