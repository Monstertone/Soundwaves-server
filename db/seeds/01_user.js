
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {username: 'Monstertone', email: 'bmovie_1999@yahoo.com', password: 'asdfasdf', birth_date: '1990-12-12', gender: 'male', share_info: 'true'},

      ]);
    });
};
