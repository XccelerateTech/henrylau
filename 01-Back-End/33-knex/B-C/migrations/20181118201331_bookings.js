
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookings', table=>{
        table.increments().primary();
        table.string('date');
        table.string('remark');
        table.timestamps(false, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bookings')
};
