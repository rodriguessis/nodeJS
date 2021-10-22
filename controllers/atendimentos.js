
const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos', (req, res) => {

        Atendimento.lista()
                .then( lista => {
                    res.status(200).json(lista)
                })

    })

    app.get('/atendimentos/:id', (req, res) => {

        const id = parseInt( req.params.id)

        Atendimento.buscarPorId(id)
        .then( atendimento => {
            res.status(200).json(atendimento)
        })
        .catch( erro => {
            res.status(401).json(erro) 
        })

    })

    app.post('/atendimentos', (req, res) => { 

       Atendimento.adiciona(req.body)
            .then( (atendimentoCadastrado) => {
                res.status(201).json(atendimentoCadastrado)
            } )
            .catch(
                erros => {
                    res.status(404).json(erros)
                }
            )

    })

    app.delete('/atendimentos/:id', (req, res) => {
        console.log('deletando')
    })   

}