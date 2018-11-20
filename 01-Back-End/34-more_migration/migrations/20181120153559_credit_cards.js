
exports.up = function(knex, Promise) {
    return knex.schema.createTable('credit_cards', table=>{
        table.increments().primary();
        table.integer('card_num').unique();
        table.data('expiry_date');
        table.integer('account_id').unsigmed();
        table.foreign('account_id').references('accounts.id');
        table.timestamps(false, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('credit_cards')
};
