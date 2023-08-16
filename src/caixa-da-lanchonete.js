class CaixaDaLanchonete {
constructor(){
    this.cardapio = {
            'cafe': 3.00,
            'chantily': 1.50,
            'suco': 6.20,
            'sanduiche': 6.50,
            'queijo': 2.00,
            'salgado': 7.25,
            'combo1': 9.50,
        'combo2': 7.50,

    }
     
        
        
    
    this.metodosDePagamento = ['dinheiro', 'debito', 'credito']
}



    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.metodosDePagamento.includes(metodoDePagamento)){
            return 'Forma de pagamento inválida!'
        }
    if (itens.length == 0){
        return 'Não há itens no carrinho de compra!'
    }

    

    let total = 0
    for(const item of itens){
        const [codigo, quantidade] = item.split(',')
        if(!(codigo in this.cardapio)){
            return 'Item inválido!'
           
        } 
        if(quantidade == 0){
           return `Quantidade inválida!`
        }
        if(codigo == null){
            return `Não há itens no carrinho de compra!`
        }
       
       
        const valorDaCompra = this.cardapio[codigo] * parseInt(quantidade)
       
        total = valorDaCompra + total
    }
        
    
    
    if(metodoDePagamento == 'debito'){
        return `R$ ${total.toFixed(2).replace('.',',')}`

    }

    else if(metodoDePagamento == 'credito'){
        const juros = total * 1.03;
        return `R$ ${juros.toFixed(2).replace('.',',')}`

    }

    else if(metodoDePagamento == 'dinheiro'){
        const desconto = total * 0.95;
        return `R$ ${desconto.toFixed(2).replace('.',',')}`

    }
 }
}


   

let caixa1 = new  CaixaDaLanchonete()
console.log(caixa1.calcularValorDaCompra('dinheiro', [', 0']))


export  {CaixaDaLanchonete}