const knex = require('../db/knex.js');

module.exports = {
  retrieve: (req, res)=> {
    knex('song').then((results)=>{
      res.json(results);
    })
  }

}
