const passport = require('passport');
//jwt requires from passport
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
//local requires from passport
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs');
const config = require('../config');
const db = require('../models')

//JWT passport strategy
//1. setup strategy options
const jwtOptions = {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromHeader('authorization')
}
//2. create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done)=>{
    db.user.findById(payload.sub)
    .then((foundUser)=>{
        if(foundUser){
            done(null, foundUser)
        }
        else{
            done(null, false)
        }
    })
    .catch((err)=>{
        done(err, false)
    })
})
//3. tell passport to use strategy
passport.use(jwtLogin)



//local passport strategy
//1. setup strategy options
const localOptions = {
    usernameField: 'email'
}
//2. create JWT strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done)=>{
    db.user.findAll({where: {email: email}})
    .then((results)=>{
        if(results){
            //if email is found
            let user = results[0];
            
            bcrypt.compare(password, user.password, (err, isMatch)=>{
                if(err){
                    return done(err)
                }
                if(!isMatch){
                    return done(null, false)
                }
                return done(null, user)
            })
        }
        else{
            done(null,false)
        }
    })
})
//3. tell passport to use strategy
passport.use(localLogin)