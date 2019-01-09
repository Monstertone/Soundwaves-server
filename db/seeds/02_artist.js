
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      // Inserts seed entries
      return knex('artist').insert([
        {artist_name: 'Arnos Farm', email: 'farmerarno@gmail.com', city: 'Phoenix', state: 'AZ', genre: 'alt_rock'},
        {artist_name: 'Ben Hall', email: 'bhall@gmail.com', city: 'Phoenix', state: 'AZ', genre: 'alt_rock'},
        {artist_name: 'The Preserve', email: 'preserve@gmail.com', city: 'Phoenix', state: 'AZ', genre: 'rock'},
        {artist_name: 'Color of Chaos', email: 'coc@gmail.com', city: 'Phoenix', state: 'AZ', genre: 'hard_rock'},
        {artist_name: 'Interfate', email: 'interfate@gmail.com', city: 'Phoenix', state: 'AZ', genre: 'heavy_metal'},
        {artist_name: 'The Jesus Ponies', email: 'thejesusponies@jesusponies.com', city: 'Tempe', state: 'AZ', genre: 'alt-rock'},
        {artist_name: 'No  Pardon', email: 'nopardon@gmail.com', city: 'Eureka', state: 'CA', genre: 'folk'},
        {artist_name: 'Mr Skinny Dynnamo', email: 'mrskinny@gmail.com', city: 'La Mesa', state: 'CA', genre: 'pop'},
      ]);
    });
};
