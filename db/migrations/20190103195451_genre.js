
exports.up = function(knex, Promise) {
  return knex.schema.createTable('genre', (table)=>{
    table.increments();
    table.integer('song_id')
          .notNullable()
          .references('id')
          .inTable('song')
          .onDelete('CASCADE')
          .index();
    table.boolean('blues').defaultTo(false);
    table.boolean('hiphop').defaultTo(false);
    table.boolean('classical').defaultTo(false);
    table.boolean('rap').defaultTo(false);
    table.boolean('edm').defaultTo(false);
    table.boolean('pop').defaultTo(false);
    table.boolean('rock').defaultTo(false);
    table.boolean('jazz').defaultTo(false);
    table.boolean('rhythm_blues').defaultTo(false);
    table.boolean('country').defaultTo(false);
    table.boolean('folk').defaultTo(false);
    table.boolean('soul').defaultTo(false);
    table.boolean('heavy_metal').defaultTo(false);
    table.boolean('funk').defaultTo(false);
    table.boolean('punk').defaultTo(false);
    table.boolean('alt_rock').defaultTo(false);
    table.boolean('disco').defaultTo(false);
    table.boolean('instrumental').defaultTo(false);
    table.boolean('indie_rock').defaultTo(false);
    table.boolean('prog_rock').defaultTo(false);
    table.boolean('hard_rock').defaultTo(false);
    table.boolean('swing').defaultTo(false);
    table.boolean('new_wave').defaultTo(false);
    table.boolean('trance').defaultTo(false);
    table.boolean('grunge').defaultTo(false);
    table.boolean('dance').defaultTo(false);
    table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
  return  knex.schema.dropTable('genre');
};
