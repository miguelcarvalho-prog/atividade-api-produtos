const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    const produto = {
        id: 1,
        nome: "Notebook",
        preco: 3500,
        estoque: 10,
        categoria: "Eletrônicos"
    };

    res.json(produto);
});

app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
});