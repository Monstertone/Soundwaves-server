const knex = require("../db/knex.js");
const hasher = require('../config/hasher');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secret';

module.exports = {
  create: (req, res) =>{
    hasher.hash(req.body).then((user)=>{
      knex('user').insert({
         username: user.username,
         user_type: 'listener',
         email: user.email,
         password: user.password,
         birth_date: user.birth_date,
         gender: user.gender,
         share_info: user.share_info
      }, '*').then((results)=>{
        res.json({message: "Successfully registered! Please log in."})
      }).catch((err)=>{
        res.status(400).send({message: err});
      })
    })
  },

  login: (req, res)=>{
  knex('user')
    .where('email', req.body.email)
    .first()
    .then((user)=>{
      if(user){
        hasher.check(user, req.body).then((isMatch)=>{
          if(isMatch){
            const token = jwt.sign(user, secret);
            delete user.password;
            res.json({message: "Successfully signed in", token, user})
          }else{
            res.status(400).send({message: 'Invalid Email / Password'});
          }
        })
      }else{
        res.status(400).send({message: 'Invalid Email / Password'});
      }
    }).catch((err)=>{
      res.status(400).send({message: 'Invalid Email / Password'});
    })
},

  verify: (req, res)=>{
    res.json(req.decoded);
  }
}
