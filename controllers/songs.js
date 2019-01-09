const knex = require('../db/knex.js');

module.exports = {

  ordered: (req, res)=> {
    knex('song').then((results)=>{
      res.json(results);
    })
  },

  random: (req, res)=> {
    knex('song').orderBy(knex.raw('RANDOM()')).then((results)=>{
      res.json(results);
    })
  },

 stream: (req, res)=> {

   const ALL_GENRES = ['blues','hiphop','classical','rap','edm','pop','rock','jazz','rhythm_blues','country','folk','soul','heavy_metal','funk','punk','alt_rock','disco','instrumental','indie_rock','prog_rock','hard_rock','swing','new_wave','trance','grunge','dance'];
   const city = req.params.city;
   const genres = req.query.genres.split(',').filter(g => ALL_GENRES.indexOf(g) !== -1).map(g => `${g} = true`);
   console.log('genres',genres);
   console.log('genre db string: ', genres.join(' OR '))
   knex.select('a.artist_name', 's.title', 's.url', 's.album_art').from('artist as a').innerJoin('song as s','s.artist_id', 'a.id')
    .innerJoin(knex.select('*').from('genre').whereRaw(genres.join(' OR ')).as('sig'), function() { this.on('s.id','=','sig.song_id');})
    .where('a.city',city)
   .then((results)=>{
     res.json(results);
   })
 }

}
