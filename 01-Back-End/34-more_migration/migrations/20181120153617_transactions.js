
exports.up = function(knex, Promise) {
    return knex.schema.createTable('transactions', table=>{
        table.increments().primary();
        table.integer('balance');
        table.integer('credit_card_num');
        table.foreign('credit_card_num').references('credit_cards.card_num');
        table.integer('acc_id').unsigned();
        table.foreign('acc_id').references('accounts.id');
        table.integer('card_id').unsigned();
        table.foreign('card_id').references('credit_cards.id');
        table.timestamps(false, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('transactions')
};
