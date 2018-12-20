
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=>{
    table.increments();
    table.string('username');
    table.string('user_type');
    table.string('email');
    table.string('password');
    table.date('birth_date');
    table.string('gender');
    table.binary('share_info');


  });

};

exports.down = function(knex, Promise) {
  return  knex.schema.dropTable('user');
};
