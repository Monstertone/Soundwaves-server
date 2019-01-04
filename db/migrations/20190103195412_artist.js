
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', (table)=>{
    table.increments();
    table.string('artist_name')
         .notNullable();
    table.string('email');
    table.string('city');
    table.string('state');
    table.string('genre');
    table.timestamps(true, true);
  });
};


exports.down = function(knex, Promise) {
  return  knex.schema.dropTable('artist');
};
