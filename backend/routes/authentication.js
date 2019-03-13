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
    let emaillUser = req.body.email;
    let password = req.body.password

    db.user.find({where: {email: emailUser}})
    .then((results)=>{
        console.log(results)
    })
    res.json({token: tokenForUser(req.user)})
})

router.post('/signup', (req,res)=>{
    // let fnameUser = req.body.fname;
    // let lnameUser = req.body.lname;
    let username = req.body.username
    let emailUser = req.body.email;
    let passwordEncrypt = bcrypt.hashSync(req.body.password, 8)
    let driversLicenseNumber = req.body.driversLicenseNumber;
    // let ageUser = req.body.age;
    let yearCar = req.body.carYear;
    let makeCar = req.body.carMake;
    let modelCar = req.body.carModel;
    
    db.user.find({where: {email: emailUser}})
    .then((results)=>{
        if(!results){
            //create new user
            db.user.create({fname: fnameUser, lname: lnameUser, email: emailUser, password: passwordEncrypt, dlicense: dlicenseUser, age: ageUser, year: yearCar, make: makeCar, model: modelCar})
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