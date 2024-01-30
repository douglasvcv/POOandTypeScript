class Funcionario{
    Nome
    Salario
    
    constructor(Nome, Salario){
        this.Nome = Nome
        this.Salario = Salario

    }
}

class Gerente extends Funcionario{
    Departamento

    constructor(Nome, Salario, Departamento){
        super(Nome, Salario)
        this.Departamento = Departamento 
    }

    exibir(n){
        
        console.log(n)
        
    }
}
class Vendedor extends Funcionario{
    PercentualComissao = parseFloat(0.4) 

    constructor(Nome, Salario){
        super(Nome, Salario)
        
    }
    calcularSalario(Salario){
        
        let comicao = Salario*this.PercentualComissao
        let SalarioMaisComicao = comicao+Salario
        console.log(SalarioMaisComicao)
    }
    exibir(n){
        console.log("Salário mais a comição: " + Number(n.Salario * this.PercentualComissao + this.Salario ))
        console.log(n)
    }
}

const Funcionario1 = new Gerente("Douglas", 8000, "Desenvolvimento web")
 const Vendedor1 = new Vendedor("Vitor",18000,)


// Funcionario1.exibir(Funcionario1)
Vendedor1.calcularSalario(Vendedor1.Salario)
Vendedor1.exibir(Vendedor1)
// console.log(Funcionario1.array)



//Parte 2 ---------------------------------------------------

class Produto{
    Nome
    valor  
    constructor(Nome, valor){
        this.Nome = Nome
        this.valor = valor
    }
    
}
class Venda extends Vendedor{
    ListaDeProduto = []
    ValorTotal = 0
    constructor(Nome, Salario){
        super(Nome, Salario)
    }
    adicionarProduto(n){
        this.ListaDeProduto.push(n)
    }
    calcularTotal(){
        for(let i = 0; i < this.ListaDeProduto.length; i++){
            
            this.ValorTotal += this.ListaDeProduto[i].valor
        
        }
        console.log(this.ValorTotal)
    }
    finalizarVenda(){
        console.log(``)
    }
}
let venda1 = new Venda("Douglas", 3000)
let produto1 = new Produto("bombril", 2)
let produto2 = new Produto("jua", 7)


venda1.adicionarProduto(produto1)
venda1.adicionarProduto(produto2)

console.log(venda1.ListaDeProduto)

venda1.calcularTotal()



console.log(venda1)