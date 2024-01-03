import mongoose from 'mongoose';

const carroSchema = new mongoose.Schema({
        modelo: {
                type: String,
                unique: true
        },
        marca: {
                type: String,
                require: true
        },
        ano: {
                type: Number,
                require: true
        },
        preco: {
                type: Number,
                require: true
        },
        
});
const Carro = mongoose.model("Carro", carroSchema)

export default Carro