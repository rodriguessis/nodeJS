class QueryAtendimentos {

    adiciona( atendimento ) {
        return new Promise(( resolve, reject ) => {

            // salva no banco e se ok 
            resolve(atendimento);
            // se houver erro               reject('{"erro" : "deu erro"}' )

        } )
    }

    lista() {

        var atendimento1 = { id : 1, "descricao" : "Revisão Basica", "status" : "Agendado"}
        var atendimento2 = { id : 2, "descricao" : "Limpeza Ar Condicionado", "status" : "Concluido"}
        var atendimento3 = { id : 3, "descricao" : "Revisoa parte Eletrica", "status" : "Em analise"}
        var atendimento4 = { id : 4, "descricao" : "Trocar de Filtros de Ar", "status" : "Agendado"}

        var lista = [atendimento1, atendimento2, atendimento3, atendimento4]
        
        return new Promise(( resolve, reject ) => {
            resolve(lista)
        // se houver erro               reject('{"erro" : "deu erro"}' )
        }
        
        )
    }

    por( _id ) {

        var atendimento = { id : _id, "descricao" : "Revisão Basica", "status" : "Agendado"}

        return new Promise(( resolve, reject ) => {
            resolve( atendimento )
        })
    }

}

module.exports = new QueryAtendimentos();