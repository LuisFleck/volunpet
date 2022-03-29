const mongoose = require("mongoose")


const UsuarioSchema = new mongoose.Schema({
    nomeVoluntario: {
        type: String,
        require: true
    },
    ruaVoluntario:{
        type: String,
        require: true
    },
    bairroVoluntario: {
        type: String,
        require: true
    },
    cidadeVoluntario: {
        type: String,
        require: true
    },
    estadoVoluntario: {
        type: String,
        require: true
    },
    senhaVoluntario: {
        type: String,
        require: true
    },
    emailVoluntario: {
        type: String,
        require: true
    },
    telefoneVoluntario:{
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
// colecao
mongoose.model('usuario', UsuarioSchema)

const teste = mongoose.model('usuario')
new teste ({
   nomeVoluntario:"teste",
   ruaVoluntario:"testerua",
   bairroVoluntario:"teste",
   cidadeVoluntario:"testopolis",
   estadoVoluntario:"TS",
   senhaVoluntario: "12345",
   emailVoluntario:"teste@teste.com",
   telefoneVoluntario:51123456789

}).save().then(()=>{
    console.log("salvo")
}).catch((err) => {
    console.log("erro ao salvar"+err)
}) //save para salvar