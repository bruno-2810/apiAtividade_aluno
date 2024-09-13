import turmasController from './controller/turmasController.js'

export default function adicionarRotas(servidor) {
    servidor.use(turmasController);
}