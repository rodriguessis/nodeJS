const query = require('../repository/queryAtendimentos')

class Atendimento {

    adiciona(atendimento) {

        // validar dados

        return query.adiciona(atendimento)
            .then( atendimento => { return atendimento} ) 

      //  
    }

    lista() {

        return query.lista()
            .then( lista => { return lista })
    }

    buscarPorId( id ) {
        return query.por(id)
        .then( atendimento => { return atendimento } )
    }

}

module.exports = new Atendimento