const express = require("express");
 
const app = express();

app.get("/api/usuarios",function(req, res) {
    res.send("Nome: Yurys, 27 anos, Nome: Davids, 26 anos")
});

app.listen(8080);