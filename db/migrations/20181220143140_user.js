
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=>{
    table.increments();
    table.string('username')
         .unique()
         .notNullable();
    table.string('user_type');
    table.string('email')
         .unique()
         .notNullable();
    table.string('password')
         .notNullable();
    table.date('birth_date')
         .notNullable();
    table.string('gender');
    table.boolean('share_info');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return  knex.schema.dropTable('user');
};
