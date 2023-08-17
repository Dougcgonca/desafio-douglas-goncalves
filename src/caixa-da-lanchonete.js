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

    this.extras = ['chantily', 'queijo', 'combo1', 'combo2']
        


    
     
        
        
    
    this.metodosDePagamento = ['dinheiro', 'debito', 'credito']
}



    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.metodosDePagamento.includes(metodoDePagamento)){
            return 'Forma de pagamento inválida!'
        }
    if (itens.length == 0){
        return 'Não há itens no carrinho de compra!'
    }
    
        
    let temPrincipal = 0
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
        } if (this.extras.includes(codigo) && temPrincipal <= 1){
            return'Item extra não pode ser pedido sem o principal'
        }

      

       
       
       
       
        const valorDaCompra = this.cardapio[codigo] * parseInt(quantidade)
       
        total = valorDaCompra + total
        temPrincipal ++
    }

    
        
    
    
    if(metodoDePagamento == 'debito'){
        
        const debito = total;
        return `R$ ${debito.toFixed(2).replace('.',',')}`

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
console.log(caixa1.calcularValorDaCompra('debito', ['queijo, 2', 'sanduiche, 3']))


export  {CaixaDaLanchonete}