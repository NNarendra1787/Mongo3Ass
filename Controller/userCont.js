const employee = require("../Model/userModel")

async function addNewUser(req, res){
    try{
        const deta = req.body;
        const newuser = await employee.create(deta)
        res.status(200).send({Client: newuser})
    }
    catch(e){
        res.status(500).send({err: e})
    }
}
async function findUser(req, res){
    try{
        const Result = await employee.find();
        console.log(Result);
        res.status(200).send({data: Result})
    }
    catch(e){
        res.status(500).send({err: e})
    }
}
async function findSalary(req, res){
    try{
        const query = {"salary": {$gt: 30000}}
        const Result = await employee.find(query);
        console.log(Result);
        res.status(200).send({data: Result})
    }
    catch(e){
        res.status(500).send({err: e})
    }
}
async function findExp(req, res){
    try{
        const query = {"overallExp": {$gte: 2}}
        const Result = await employee.find(query);
        console.log(Result);
        res.status(200).send({data: Result})
    }
    catch(e){
        res.status(500).send({err: e})
    }
}
async function findGradExp(req, res){
    try{
        const query = {$and : [{"overallExp": {$gt: 1}},{"yearGrad": {$gt: 2015}}]}
        const Result = await employee.find(query);
        console.log(Result);
        res.status(200).send({data: Result})
    }
    catch(e){
        res.status(500).send({err: e})
    }
}

async function updateSal(req, res){
    try{
        const query = [{"salary": {$gte: 35000}}, {$set : {"salary": 48000}}]
        const Result = await employee.findOneAndUpdate(query)
        console.log(Result);
        res.status(200).send({user: Result})
    }catch(e){
        res.status(500).send({err: e})
    }
}

async function DeleteUser(req, res){
    try{
        const query = {lastCompany: "Y"}
        // const Result = await collection.findOne({name: "node", class: "Mongodb"})
        const Result = await employee.findOneAndDelete(query)
        console.log(Result);
        res.status(200).send({user: Result})
    }
    catch(e){
        res.status(500).send({err: e})
    }
}


module.exports = {
    addNewUser,
    findUser,
    findSalary,
    findExp,
    findGradExp,
    updateSal,
    DeleteUser
}