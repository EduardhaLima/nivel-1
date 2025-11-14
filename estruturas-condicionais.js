const idade = 17 //condicao
/*
if (idade >= 18) { //se
    console.log("A pessoa é maior de idade") //imprimir isso se for verdade
} else {
    console.log("A pessoa é menor de idade") //imprimir isso se for falso
}
*/

if (idade < 18){ //se
    console.log("A pessoa é menor de idade")
} else if (idade >=18 && idade < 65) { //senao um precisa ser verdadeiro
    console.log("A pessoa é adulta")
} else { //nao (falsa) 
    console.log("A pessoa é idosa")
}

let salario = 2000

if (salario > 1500 || idade < 18){ //os dois precisam ser verdadeiro
    console.log("Condicao verdadeira")
}

console.log(idade > 18)
console.log(idade > 18 && salario > 1000)
console.log(idade < 18 && salario > 1000)
console.log(idade < 18 || salario > 1500)

const resultado = 5 % 3

switch (resultado) { //funcao similar ao if, else if, else; mas se e necessario observar qual forma se e melhor para ler.
    case 0: console.log("O número é par")
        break
    case 1: console.log("O número é impar")
        break
    default: console.log("Um número desconhecido")
}