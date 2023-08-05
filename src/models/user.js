import db from '../config/db';


// modelo identico a tabela criada de usuarios
// utilizando Schema do dynamoose com a conexao do banco de dados

export const UserSchema = new db.Schema(
    {
        id: {
            // define o tipo de dado, se é texto, numero,etc
            type: String,
            // toda chave primaria, como id, deve receber esse campo, hashKey como verdadeiro
            hashKey: true,
        },
        nome: {
            // este campo, nao e uma chave importante, ou seja, ele nao e uma chave de busca, nao e nem hashKey nem index global
            type: String,
            required:true
        },
        email: {
            type: String,
            // ja este campo e um index global para busca, e ele tem como chave de classificacao, a data de criacao
            index: {
                name: "email-dataCriacao-index",
                rangeKey: "dataCriacao",
                project: true,
                type: "global",

            },
            required:true

        },
        documento: {
            type: String,
            required:true

        },
        telefone: {
            type:String,
            required: true
        },
        senha: {
            type:String,
            required:true
        },
        dataCriacao: {
            type: Number,
            required: true
        }
    },
    {

        timestamps: true,
        saveUnknown: true,
    },
);

export default db.model('usuarios', UserSchema, { throughput: 'ON_DEMAND' });