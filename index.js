const express = require("express")
const mongoose = require("./database/dbConnection")

const port = 3000


mongoose.connect("mongodb://localhost:27017/anbima", erro => {
    if(erro){
        console.log(erro)
    } else{
        console.log("Conectado com MongoDB na porta 27017 e no banco de dados Anbima")
        const app = express()
        app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
    }
})