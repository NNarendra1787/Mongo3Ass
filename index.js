const express = require('express');
const connectionToDB = require('./db/connection');
const router = require('./Routers/routes');
const app = express()
const port = 3000
require('dotenv').config()
app.use(express.json());

app.use("/api", router)
app.get('/', (req, res) => res.send('Hello World!'))

const startConnection = async()=>{
    try{
        await connectionToDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
    catch(err){
        console.log("error", err);
    }
}
startConnection();
