const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()


// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() {
        return x
    }
    return dentro
}

const dentroOuFora = fora()
console.log(dentroOuFora())