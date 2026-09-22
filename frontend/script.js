async function carregarDados() {
    const url = 'https://cuddly-succotash-5vxjrp67j7v53pp7-3000.app.github.dev/';

    const resposta = await fetch(url);

    const dados = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = "";

    dados.forEach(produto => {
        listaProdutos.innerHTML += `
            <div>
                <img src="${produto.imagem}" width="200">
                <h2>${produto.nome}</h2>
                <p>Preço: R$ ${produto.preco}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Estoque: ${produto.estoque}</p>
            </div>
            <hr>
        `;
    });
}

carregarDados();