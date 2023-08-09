// De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno, 
// crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de 
// *arrow functions* para calcular as operações abaixo.

// Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar 
// uma interface. Para testar a função você pode fazer chamadas manuais a ela no javascript ou utilizar 
// o console do navegador (qualquer função incluída na página pode ser chamada diretamente no console).

const media = (...numbers) => {
    const soma = numbers.reduce((acumulador, num) => acumulador + num, 0)
    return soma / numbers.length
}
console.log(`media aritimetica: ${media(6,6,6)}`)

const ponderada = (...entrada) => {
    const soma = entrada.reduce((acumulador, {numero, peso}) => acumulador + (numero * peso), 0)
    const somaPesos = entrada.reduce((acumulador, entrada) => acumulador + entrada.peso, 0)
    return soma/somaPesos
}

console.log(`media ponderada: ${ponderada(
    {numero: 9, peso: 3},
    {numero: 7, peso: 1},
    {numero: 10, peso: 1}
)}`)

const mediana = (...numbers) => {
    const numerosOrdenados = [...numbers].sort((a,b) => a-b)
    const meio = Math.floor(numerosOrdenados.length/2)
    if(numerosOrdenados % 2 !== 0){
        return numerosOrdenados[meio]
    }
    const primeiroMeio = numerosOrdenados[meio-1]
    const segundoMeio = numerosOrdenados[meio]
}

console.log(`mediana impar: ${mediana(2,2,3,4,5,6,4)}`);
console.log(`mediana par: ${mediana(1,2,3,4,5,6,7,8)}`);


const moda = (...numeros) => {

    const quantidade = numeros.map(num => [
        num,
        numeros.filter(n => num === n).length
    ])

    quantidade.sort((a, b) => b[1] - a[1])
    return quantidade[0][0]
}

console.log(`Moda: ${moda(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)