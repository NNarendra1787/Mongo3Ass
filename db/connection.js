const mongoose = require('mongoose')

const connectionToDB = (url) => mongoose.connect(url)
    .then(()=> console.log("Connected Mongo Db"))
    .catch((err)=> console.log(err))

module.exports = connectionToDB