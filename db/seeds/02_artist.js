
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
      ]);
    });
};
