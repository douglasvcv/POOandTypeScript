class Imovel{
    endereco
    cep
    metro
    Qtdbanheiros = []
    Qtdquartos = []
    QtdPessoas = []
    valor

    adicionarPessoa(pessoa){
        this.QtdPessoas.push(pessoa)
    }
    removerPessoa(pessoa){
        this.QtdPessoas.splice(this.QtdPessoas.indexOf(pessoa), 1) 
    }
}

class Pessoa{
    Nome
    Cpf
    DataNascimento


}

class Casa extends Imovel{
    ComQuintal = false


    calcularPreco(){
        if(this.ComQuintal = true){
           this.valor = this.valor + (this.valor * 0.3)
        }
    }

    adicionarBanheiro(banheiro){
        if(this.Qtdbanheiros > 5){
            console.log("Número de banheiro superior")
        }else{
            this.Qtdbanheiros.push(banheiro)
        }
    }
}

class Apartamento extends Imovel{
    Andar
    ValorCondominio


    calcularPreco(){
        this.valor = this.valor + this.ValorCondominio
    }

    adicionarBanheiro(banheiro){
        if(this.Qtdbanheiros > 3){
            console.log("Número de banheiro superior")
        }else{
            this.Qtdbanheiros.push(banheiro)
        }
    }
}

class Kitnet extends Imovel{
    adicionarBanheiro(banheiro){
        if(this.Qtdbanheiros > 2){
            console.log("Número de banheiro superior")
        }else{
            this.Qtdbanheiros.push(banheiro)
        }
    }
}

const Imovel11 = new Imovel()

//finalizado parte 1. Falta a parte 2 *criar os construtores e alguns objetos de cada classe