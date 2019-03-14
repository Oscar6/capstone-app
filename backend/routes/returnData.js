const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')

//default options
router.use(fileUpload())

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/return-data', (req,res)=>{
    console.log(req)
    console.log(req.files)
    
    let imageFileReceipt = req.files.imageReceipt
    let imageFileItem = req.files.imageItem

    imageFileReceipt.mv(`${__dirname}/uploads/${imageFileReceipt.name}.jpg`)
    imageFileItem.mv(`${__dirname}/uploads/${imageFileItem.name}.jpg`)
    
})




module.exports = router