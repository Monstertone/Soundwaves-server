
exports.up = function(knex, Promise) {
  return knex.schema.createTable('genre', (table)=>{
    table.increments();
    table.integer('song_id')
          .notNullable()
          .references('id')
          .inTable('song')
          .onDelete('CASCADE')
          .index();
    table.boolean('blues');
    table.boolean('hiphop');
    table.boolean('classical');
    table.boolean('rap');
    table.boolean('edm');
    table.boolean('pop');
    table.boolean('rock');
    table.boolean('jazz');
    table.boolean('rhythm_blues');
    table.boolean('country');
    table.boolean('folk');
    table.boolean('soul');
    table.boolean('heavy_metal');
    table.boolean('funk');
    table.boolean('punk');
    table.boolean('alt_rock');
    table.boolean('disco');
    table.boolean('instrumental');
    table.boolean('indie_rock');
    table.boolean('prog_rock');
    table.boolean('hard_rock');
    table.boolean('swing');
    table.boolean('new_wave');
    table.boolean('trance');
    table.boolean('grunge');
    table.boolean('dance');
    table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
  return  knex.schema.dropTable('genre');
};
