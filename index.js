class Pessoa{
    nome
    idade

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        console.log("Olá, estou construindo uma pessoa!")
    }
    falar(texto){
        console.log(texto)
    }
}

class Motorista extends Pessoa{
    carro

    constructor(nome, idade, carro){
        super(nome, idade)
        this.carro = carro
       
    }
    ultrapassar(){
        console.log("opss, ultrapassou alguém")
    }
}

let pessoa = new Pessoa("Douglas")
let motorista = new Motorista()
motorista.nome = "Vitor"
motorista.idade = 22
motorista.carro = "Hb20"

let motoristadois = new Motorista ("Douglinhas", 21, "Hb20")

pessoa.falar("oiiiieee")

