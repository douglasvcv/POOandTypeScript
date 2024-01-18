class Livro{
    Titulo
    Autor
    Editora
    Ano
    disponivel

    constructor(Titulo, Autor, Editora, Ano){
        this.Titulo = Titulo
        this.Autor = Autor
        this.Editora = Editora
        this.Ano = Ano
        this.disponivel = true
    }


}

class Biblioteca{
    Nome
    Endereco
    Telefone
    Acervo

    constructor(Nome, Endereco, Telefone){
        this.Nome = Nome
        this.Endereco = Endereco
        this.Telefone = Telefone
        this.Acervo = []
    }

    buscar(nomeLivro){
        this.Acervo.forEach((n)=>{
            if(nomeLivro == n.Titulo){
                console.log(n)
                
            }
            
        })
    }
    emprestar(nomeLivro){
        this.Acervo.map((n)=>{
            if(nomeLivro == n.Titulo){
                if(n.disponivel == true){
                    n.disponivel = false
                     console.log(true)
                     return true
                }
                else{
                    console.log(false)
                    return false
                }
            }
        })
    }
    devolver(nomeLivro){
        this.Acervo.forEach((n)=>{
            if(nomeLivro == n.Titulo){
                if(n.disponivel == true){
                    console.log("Livro já devolvido")
                }
                if(n.disponivel == false){
                    n.disponivel = true
                    console.log("Livro devolvido!")
                }
            }
        })
    }
}
//array
let array = []

//object livros
const livro1 = new Livro("1984", "George", "Letras", 1949)
const livro2 = new Livro("Revolução dos bichos", "George", "Letras", 1945)
const livro3 = new Livro("Gifted hands", "Ben Carson", "Ebay", 1990)

//object biblioteca
const biblioteca1 = new Biblioteca("Pandora", "Rua Jhon Kenedy", 219931241)




array.push(livro1,livro2,livro3)

biblioteca1.Acervo.push(livro1,livro2,livro3)

//metodos
// biblioteca1.buscar("Gifted hands")
 biblioteca1.emprestar("1984")
 biblioteca1.devolver("1984")
 // console.log(array)
 console.log(livro1.disponivel)
// console.log(biblioteca1)