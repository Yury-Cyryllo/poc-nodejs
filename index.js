const express = require("express");
const app = express();

// deve listar todos usuarios
app.get("/api/usuarios",function(req, res) {
    // pegar a lista de pessoas de um arquivo
    var pessoas = []
    res.send(pessoas)
});

// Gravar usuario que veio na requisicao no arquivo
app.post("/api/usuarios", function(req,res) {
    // Ler os parametros da requisicao
    res.send(true)
    // Abrir e gravar no arquivo

})

// exibir usuario por id

// excluir usuario por id

app.listen(8081);