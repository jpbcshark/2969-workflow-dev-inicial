//import db from '../db/dbconfig.js';
/* eslint-disable camelcase */

class Evento {
    constructor({
        id,
        nome,
        descricao,
        data,
        autor_id,
        created_at,
        updated_at
    }) {
        this.id = null || id;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.autor_id = autor_id;
        this.created_at = created_at || new Date().toISOString();
        this.updated_at = updated_at || new Date().toISOString();
    }

    static async pegarEventos() {
        return [{
            id: 1,
            nome: 'Lançamento',
            descricao: 'Descrição do evento teste',
            data: '2023-01-01',
            autor_id: 1,
            created_at: '2023-01-01T07:00:00.000Z',
            updated_at: '2023-01-01T07:00:00.000Z'
        }]
    }

}

export default Evento;