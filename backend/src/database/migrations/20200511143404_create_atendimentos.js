
exports.up = function(knex) {
    return knex.schema.createTable('atendimentos', function(table){
        table.increments().primary();
        table.string('atendente').notNullable();
        table.string('assessor').notNullable();
        table.string('nome_lead').notNullable();
        table.string('telefone_lead').notNullable();
        table.string('curso_lead').notNullable();
        table.string('destinatário_lead').notNullable();
        table.string('data').notNullable();
        table.string('obersvacoes').notNullable();

        table.foreign('assessor').references('nome').inTable('assessores');
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('assessor');
  
};
