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

class Venda{
    Vendedor = Vendedor
    ListaDeProduto = []
    ValorTotal = 

    AdicionaProduto(){
        new Produto()
        //continuar aqui https://dodev.cademi.com.br/area/produto/item/1106601
    }
}