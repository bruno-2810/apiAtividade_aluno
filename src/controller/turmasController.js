import * as bd from '../repository/turmasRepository.js'

import { Router } from 'express'
const endpoints = Router()

endpoints.get('/turmas', async (req, resp) => {
    try {
        let registros = await bd.consultarTurmas()
        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/turmas', async (req, resp) => {
    try {
        let turma = req.body

        let id = await bd.inserirTurma(turma)

        resp.send({
            novoId: id
        })
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/turma/:id', async (req, resp) =>{
    try {
        let id = req.params.id
        let turma = req.body

        let linhasafetadas = await bd.alterarTurma(id, turma)

        if(linhasafetadas >=1 ){
            resp.send()
        } 
        else {
            resp.status(404).send({
                erro: 'nenhum registro encontrado!'
            })
        }
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })    
    }
})

export default endpoints;