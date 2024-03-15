const express= require( 'express')
const http= require( 'http')
const bodyParser =require( 'body-parser')
const cookieParser= require( 'cookie-parser')
const compression  =require( 'compression')
const cors = require( 'cors')
const PORT = 3000 || process.env.PORT
const app = express();
const mongoose = require('mongoose'); 

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

//express server connected with mongoDB
const mongo_url = 'mongodb+srv://tori:mO4ihTiVKLlKr7VO@react.o0ytid7.mongodb.net/?retryWrites=true&w=majority&appName=React'
console.log("Helloe node")

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error: Error) => {
  console.error('MongoDB connection error:', error);
});

// Optionally, you can listen for successful connection
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

