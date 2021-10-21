
module.exports = app => {

    app.get('/atendimentos', (req, res) => {

        res.send('Servidor rodando quase tudo ok com o GET')
    }
    )

    app.post('/atendimentos', (req, res) => { 

            console.log(req.body)

            res.send('Voce está na rota de atendimentos e realizou um POST!!')
        }
    )


}