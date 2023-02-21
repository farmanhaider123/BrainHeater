const ReportCategory  = require('../Controller/category')
const express = require('express')
const router = express.Router()

router.post('/createCategory', ReportCategory.CreateReportCategory );
router.get('/GetReportCategory',ReportCategory.GetReportCategory)
module.exports=router