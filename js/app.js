let totalGeral = 0;
document.querySelector('#lista-produtos').innerHTML = '';
document.querySelector('#valor-total').innerHTML = 'R$ 0';

function adicionar() {
    // Recuperar valores nome do produto, quantidade e valor;
    let produto = document.querySelector('#produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]
    let quantidade = document.querySelector('#quantidade').value;

    if (quantidade < 1) {
        alert('A quantidade não pode ser menor que 1');
        return;
    }
    
    //Calcular o preço;
    let preco = parseInt(quantidade * valorUnitario);

    //Adicionar no carrinho;
    let listaDeProdutos = document.querySelector('#lista-produtos');
    
    listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`

    //Atualizar valor total;
    totalGeral = totalGeral + preco;
    let valorFinal = document.querySelector('.carrinho__total')
    valorFinal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R${totalGeral}</span>
    </p>`;

    document.querySelector('#quantidade').value = 0;
    
}


function limpar() {
    totalGeral = 0;
    document.querySelector('#lista-produtos').innerHTML = '';
    document.querySelector('#valor-total').innerHTML = 'R$ 0';
}