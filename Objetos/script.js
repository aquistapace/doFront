//OBJETOS EM JAVASCRIPT

//CRIANDO UM OBJETO
//Criando um objeto literal
let livro = {
    // propriedades
    titulo: "O chamado de Cthulu",
    autor: "H.P. Lovecraft",
    ano: 1928,
    // método
    descricao: function () {
        console.log(`O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}`)
    }
}

//ACESSANDO OBJETOS
//Acessando uma propriedade de um objeto
let nomeDoLivro = livro.titulo
console.log(nomeDoLivro)

//Acessando um método de um objeto
livro.descricao() // desta forma você está executando a função do método

livro.descricao // desta forma você está executando a declaração da função 

// ALTERANDO O VALOR DE UMA PROPRIEDADE
livro.ano = 2020 // o ano que tinha o valor 1928 agora recebe o novo valor 2020
console.log(livro.ano)

// INSERINDO NOVAS PROPRIEDADES NO OBJETO
livro.genero = "Terror"
console.log(livro)

// ACESSANDO PROPRIEDADES QUE NÃO EXISTEM
let editora = livro.editora
console.log(editora) // O resultado será -undefined- pois a propriedade não está definida

// VERIFICANDO SE É UM OBJETO
let oQueSou = typeof livro
console.log(`Eu sou do tipo : ${oQueSou}`) // object
