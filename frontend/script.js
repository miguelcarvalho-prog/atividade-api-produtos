async function carregarDados() {
    const url = 'https://cuddly-succotash-5vxjrp67j7v53pp7-3000.app.github.dev/'

    const resposta = await fetch(url);

    const dados = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = `
        <h2>${dados.nome}</h2>
        <p>Preço: R$ ${dados.preco}</p>
        <p>Categoria: ${dados.categoria}</p>
    `;
}

carregarDados();