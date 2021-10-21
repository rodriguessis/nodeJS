class Atendimento {

    adiciona(atendimento, res) {
        console.log('Salvar objeto') 
        console.log(atendimento)
        res.status(200).json(atendimento)
    }

    lista(res) {
        res.status(200).json('[{"id" : 100, "descricao" : "revisão básica", "status" : "Agendado"},{"id" : 200, "descricao" : "Limpeza Ar Condicionado", "status" : "Concluido"}]')
    }

    buscarPorId( id, res ) {
        res.status(200).json({"id" : 100, "descricao" : "revisão básica", "status" : "Agendado"})
    }

}

module.exports = new Atendimento