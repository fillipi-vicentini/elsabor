import db from '../config/db';


// modelo identico a tabela criada de usuarios
// utilizando Schema do dynamoose com a conexao do banco de dados

export const ReservaSchema = new db.Schema(
    {
        id: {
            // define o tipo de dado, se é texto, numero,etc
            type: String,
            // toda chave primaria, como id, deve receber esse campo, hashKey como verdadeiro
            hashKey: true,
        },
        idUsuario: {
            type: String,
            // ja este campo e um index global para busca, e ele tem como chave de classificacao, a data de criacao
            index: {
                name: "idUsuario-id-index",
                rangeKey: "id",
                project: true,
                type: "global",

            },
            required:true

        },
        data: {
            type: String,
            required:true

        },
        hora: {
            type:String,
            required: true
        },
        observacao: {
            type:String,
        },
    },
    {

        timestamps: true,
        saveUnknown: true,
    },
);

export default db.model('reserva', ReservaSchema, { throughput: 'ON_DEMAND' });