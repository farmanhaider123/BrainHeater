
const express = require('express')
const app = express()
const cors=require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));
app.use(express.json());
app.use("/Videos",express.static("uploads"))
app.use(
  cors({
    origin: "*",
  }))


require('dotenv').config()
const { MongoDataSource } = require('./Config');
const MianRoute=require('./Router/index')
const mongoDataSource = new MongoDataSource();
mongoDataSource.connect();
app.use(cors({
origin:'*'
    }))

app.use('/api/v1/',MianRoute)
app.listen(process.env.PORT, (err) => {
    if (err)
    {
        console.log(err)
    }
    else {
        console.log("server is working on " + process.env.PORT);
    }
})