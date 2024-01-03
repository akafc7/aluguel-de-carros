import mongoose from 'mongoose';

const aluguelSchema = new mongoose.Schema({
    carro: {
        type: Object
    },
    usuario: {
        type: Object
    },
    inicioAluguel: {
        type: Date,
        default: Date.now()
    },
    fimAluguel: {
        type: Date
    }
})

const Aluguel = mongoose.model("Aluguel", aluguelSchema);

export default Aluguel
