class Pessoa{
    nome
    #idade

    constructor(nome, idade){
        this.nome = nome
        this.definirIdade(idade)
        console.log("Olá, estou construindo uma pessoa!")
    }
    falar(texto){
        console.log(texto)
    }
    definirIdade(idade){
        if(idade < 18){
            console.log("Não pode menor de idade")
        }else{
            this.#idade = idade
        }
    }
    retornarIdade(){
        return this.#idade
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

let pessoa = new Pessoa("Douglas", 18)
let motorista = new Motorista()
motorista.nome = "Vitor"
motorista.idade = 22
motorista.carro = "Hb20"

let motoristadois = new Motorista ("Douglinhas", 21, "Hb20")
console.log(pessoa.retornarIdade())


pessoa.falar("oiiiieee")

