
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('song').del()
    .then(function () {
      // Inserts seed entries
      return knex('song').insert([
        {artist_id: 1, title: '8 Feet of Chain', album: 'Arnos Farm', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/arnosfarm/8+Feet+of+Chain.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/arnosfarm/arnosfarmcover.jpg'},
        {artist_id: 1, title: 'Along the Road', album: 'Arnos Farm', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/arnosfarm/Along+the+Road.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/arnosfarm/arnosfarmcover.jpg'},
        {artist_id: 1, title: 'Gaslight Waltz', album: 'Arnos Farm', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/arnosfarm/Gaslight+Waltz.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/arnosfarm/arnosfarmcover.jpg'},
        {artist_id: 1, title: 'Ghosts of Jerome', album: 'Arnos Farm', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/arnosfarm/Ghosts+of+Jerome.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/arnosfarm/arnosfarmcover.jpg'},
        {artist_id: 2, title: 'Fortnight', album: 'Move', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/Fortnight.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/benhallmove.jpg'},
        {artist_id: 2, title: 'Culmination', album: 'Move', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/Culmination.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/benhallmove.jpg'},
        {artist_id: 2, title: 'Bright Side Dark Side', album: 'Bright Side Dark Side', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/Bright+Side++Dark+Side.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/benhallbrightside.jpg'},
        {artist_id: 2, title: 'To Become', album: 'Move', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/To+Become.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/benhallmove.jpg'},
        {artist_id: 2, title: 'What You Got', album: 'Bright Side Dark Side', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/What+You+Got.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/benhallbrightside.jpg'},
        {artist_id: 2, title: 'Comes and Goes', album: 'Bright Side Dark Side', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/Comes+and+Goes.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/benhall/benhallbrightside.jpg'},
        {artist_id: 3, title: 'Going Back', album: 'Golden Oppurtunity', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/thepreserve/Going+Back.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/thepreserve/preservegoldenopp.jpg'},
        {artist_id: 3, title: 'Drink Up', album: 'Golden Oppurtunity', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/thepreserve/Drink+Up.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/thepreserve/preservegoldenopp.jpg'},
        {artist_id: 3, title: 'Like a Man', album: 'Golden Oppurtunity', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/thepreserve/Like+a+Man.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/thepreserve/preservegoldenopp.jpg'},
        {artist_id: 3, title: 'Raising Cane', album: 'Golden Oppurtunity', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/thepreserve/Raising+Cane.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/thepreserve/preservegoldenopp.jpg'},
        {artist_id: 4, title: 'Simple Times', album: 'Hollywood', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/colorofchaos/Simple+Times.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/colorofchaos/hollywood-color-of-chaos.jpg'},
        {artist_id: 4, title: 'Time', album: 'Hollywood', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/colorofchaos/Time.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/colorofchaos/hollywood-color-of-chaos.jpg'},
        {artist_id: 4, title: 'Nightmare', album: 'Hollywood', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/colorofchaos/Nightmare.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/colorofchaos/hollywood-color-of-chaos.jpg'},
        {artist_id: 4, title: 'Fadeaway', album: 'Hollywood', url: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/colorofchaos/Fadeaway.ogg', album_art: 'https://s3-us-west-1.amazonaws.com/soundwavessongs1/colorofchaos/hollywood-color-of-chaos.jpg'},

      ]);
    });
};
