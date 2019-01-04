
exports.up = function(knex, Promise) {
  return knex.schema.createTable('song', (table)=>{
    table.increments();
    table.integer('artist_id')
          .notNullable()
          .references('id')
          .inTable('artist')
          .onDelete('CASCADE')
          .index();
    table.string('title');
    table.string('album');
    table.string('ogg_url');
    table.string('album_art');
    table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
    return  knex.schema.dropTable('song');
};
