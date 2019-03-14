let express = require('express');
let router = express.Router();

const jwt = require('jwt-simple');
const config = require('../config');

let db = require('../models');

let bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}


router.post('/signin', (req,res)=>{
    console.log(req.body.email)
    let email = req.body.email;
    let password = req.body.password;

    db.user.findOne({where: {email: email}})
    .then((user)=>{
        if (user){
            bcrypt.compare(password, user.password, (err, result)=>{
                if (result === true){
                    console.log(req.user)
                    res.json({token: tokenForUser(user)})
                }
                else if(result === false){
                    res.send(err)
                }
            })
        }
    })
    
})

router.post('/signup', (req,res)=>{
    console.log(req.body.driversLicenseNumber)
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let passwordEncrypt = bcrypt.hashSync(req.body.password, 8)
    let address = req.body.address;
    let driversLicenseNumber = req.body.driversLicenseNumber;
    let dob = req.body.dob;
    let carYear = req.body.carYear;
    let carBrand = req.body.carBrand;
    let carModel = req.body.carModel;
    
    db.user.findOne({where: {email: email}})
    .then((results)=>{
        if(!results){
            //create new user
            db.user.create({fname: fname, lname: lname, email: email, password: passwordEncrypt, address: address, driversLicenseNumber: driversLicenseNumber, dob: dob, carYear: carYear, carBrand: carBrand, carModel: carModel})
            .then((user)=>{
                return res.json({token: tokenForUser(user)})
            })
        }
        else{
            return res.status(422).send({error: "Email already exists"})
        }
    })

})

module.exports = router;