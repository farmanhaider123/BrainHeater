
const User = require('../Controller/userReport')

const multer = require('multer');
const express = require('express')
const router = express.Router()
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
        cb(null, true);
    } else {
        cb(null, false);
    }

}
var upload = multer({
    storage: storage,
    limits: {
        fileSize: 50000000 // 10000000 Bytes = 50 MB
    },
    fileFilter: fileFilter
});

router.post('/createUser',upload.single('attach'), User.CreateUserReport);

module.exports=router