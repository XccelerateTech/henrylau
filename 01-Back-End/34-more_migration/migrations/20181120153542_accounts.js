
exports.up = function(knex, Promise) {
    return knex.schema.createTable('accounts', table=>{
        table.increments().primary();
        table.string('name');
        table.string('phone').unique();
        table.string('ID_num').unique();
        table.string('email').unique();
        table.timestamps(false, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('accounts')
};
