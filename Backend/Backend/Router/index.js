// const User = require('../Router/user')
const express = require('express')
const category = require('../Router/category')
const UserReport=require('../Router/userReport')
const router = express.Router()


router.use('/Category', category)
router.use('/User',UserReport)
module.exports=router