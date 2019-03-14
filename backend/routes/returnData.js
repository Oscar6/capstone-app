const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
const db = require('../models')

//default options
router.use(fileUpload())

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/return-data', (req,res)=>{
    console.log(req.body)
    console.log(req.files)
    let itemName = req.body.itemName
    let store = req.body.store
    let imageFileReceipt = req.files.imageReceipt
    let imageFileItem = req.files.imageItem
    let imagePathReceipt = `${__dirname}/../../public/images/${imageFileReceipt.name}.jpg`
    let imagePathItem = `${__dirname}/../../public/images/${imageFileItem.name}.jpg`

    db.returnItem.create({store: store, receiptImagePath: imagePathReceipt, itemImagePath: imagePathItem, itemName: itemName})
    
    imageFileReceipt.mv(`${__dirname}/../../public/images/${imageFileReceipt.name}.jpg`)
    imageFileItem.mv(`${__dirname}/../../public/images/${imageFileItem.name}.jpg`)

    

})




module.exports = router