
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=>{
    table.increments();
    table.string('username');
    table.string('user_type');
    table.string('email')
         .unique()
         .notNullable();
    table.string('password');
    table.date('birth_date');
    table.string('gender');
    table.binary('share_info');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return  knex.schema.dropTable('user');
};
