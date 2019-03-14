const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')

//default options
router.use(fileUpload())

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/return-data', (req,res)=>{
    console.log(req.body)
    console.log(req.files.imageItem)

    let imageFileReceipt = req.files.imageReceipt
    imageFileReceipt.mv(`${__dirname}/uploads/image_receipt.jpg`)
    let imageFileItem = req.files.imageItem
    imageFileItem.mv(`${__dirname}/uploads/image_item.jpg`)
})




module.exports = router