// Criar função de forma literal
function fun1() {}

// Armazenar uma função em uma variável
const fun2 = function () {};

// Armazenar uma função em um array
const array = [
    function (a, b) {
        return a + b;
    },
    fun1,
    fun2,
];

console.log(array[0](2, 3));

// Armazenar uma função em um objeto
const obj = {};
obj.falar = function () {
    return "Ola!";
};

console.log(obj.falar());

// Passar uma função como parâmetro para outra função
function run(fun) {
    fun();
}

run(function () {
    console.log("Executando...");
});

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    };
}

soma(2, 3)(4);
const cincoMais = soma(2, 3); // Guardando os valores da função em uma constante
cincoMais(4); // Chamando a constante e o valor da segunda função