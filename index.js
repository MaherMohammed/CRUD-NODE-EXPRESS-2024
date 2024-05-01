import mongoose from 'mongoose'
import express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

mongoose.connect("mongodb+srv://admin:admin123@cluster1.1pd6clr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster1")
.then(()=>{
    console.log("Connected to DataBase")
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    })
})
.catch(()=>{
    console.log('Failed')
})




