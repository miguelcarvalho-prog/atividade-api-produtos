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
            categoria: "Eletrônicos",
            imagem: "https://cdn1.smartprix.com/rx-in7jdvIGp-w1200-h1200/n7jdvIGp.jpg"
        },
        {
            id: 2,
            nome: "Celular",
            preco: 1800,
            estoque: 15,
            categoria: "Eletrônicos",
            imagem: "https://tse4.mm.bing.net/th/id/OIP.IPHp8t692Sz_u5tZeOfWiQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            id: 3,
            nome: "Mochila",
            preco: 120,
            estoque: 20,
            categoria: "Acessórios",
            imagem: "https://tse3.mm.bing.net/th/id/OIP.Zx2W3x-db9GIzuCLC8bsQQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        }
    ];

    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
});