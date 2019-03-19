const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const db = require('../models')


router.post('/driver-data',(req,res)=>{
    db.returnItem.findAll({
    })
    .then((results)=>{
        console.log(results)
    })
})



module.exports  = router