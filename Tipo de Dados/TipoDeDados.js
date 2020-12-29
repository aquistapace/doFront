// Tipo de Dados em Javascript

// Primitivos - São imutáveis,ou seja, não podem ter seus valores modificados
// number | booleano | string | null | undefined
let souNumero = 10                                 
let souBooleano = true                             
let souString = 'Caroline'                        
let souStringTambem = "doFront"
let souVazio = null                            
let souIndefinido

// Não Primitivos - São mutáveis,ou seja,podem ter seus valores modificados
// object 
let souObjeto = {
    souPropriedade : true
}
// Array é um tipo de especial de Objeto
let souArray = ['dev','tech','ti']

// Troque o nome da váriavel no console.log para ver o resultado
console.log(souNumero)  

// Como verificar qual o tipo do dado de uma váriavel ?
// Utilizando typeof
let x = 'doFront 2020'
let queTipoEuSou = typeof x
console.log(`Meu tipo de dado é : ${queTipoEuSou}`)