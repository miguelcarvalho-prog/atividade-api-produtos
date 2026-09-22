const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    const produtos = [
        {
            id: 1,
            nome: "Notebook",
            preco: 3500,
            estoque: 10,
            categoria: "Eletrônicos"
        },
        {
            id: 2,
            nome: "Celular",
            preco: 1800,
            estoque: 15,
            categoria: "Eletrônicos"
        },
        {
            id: 3,
            nome: "Mochila",
            preco: 120,
            estoque: 20,
            categoria: "Acessórios"
        }
    ];

    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
});