//?                                               AULA 4 - Template Literals

// const name = 'joao'

// console.log(`Olá, ${name}!
// Estamos em ${Date()}
//   2 + 2 = ${2 + 2}
// `)

//?                                               AULA 5 - Arrow Functions

// function normalSum(a, b) {
//   return a+b
// }
// console.log(`soma normal, ${normalSum(2,2)}`)


// const anonimousSum = function (a,b) {
//   return a+b
// }
// console.log(`soma anônima, ${anonimousSum(2,2)}`)


// const arrowSum = (a,b) => {
//   return a+b
// }
// console.log(`soma anônima arrow, ${arrowSum(2,2)}`)


// const reducedArrowSum = (a,b) => a+b
// console.log(`soma anônima arrow reduzida, ${reducedArrowSum(2,2)}`)


// const double = n => `O dobro de ${n} é ${n * 2}`
// const number = 21
// console.log(`Dobro: ${double(number)}`)


// const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
// const startingWithP = towns.filter(town => town[0] === 'P')
// console.log(startingWithP)

//?                                               AULA 6 - Desestruturação de objetos e arrays

// const person = {
//   name: "Luke",
//   job: "Farmer",
//   parents: ["Anakin", "Padme"]
// }

// const name = person.name

// const { job, parents } = person

// console.log(name, job, parents)

// const [father, mother] = parents

// console.log(father, mother)

// function createUser({ name, job, parents }) {
//   const id = Math.floor(Math.random() * 9999)
//   return {
//     id,
//     name,
//     job,
//     parents
//   }
// }

// const luke = createUser(person)

// console.log(luke)

//?                                               AULA 8 - Operador spread

// const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

// console.log(towns)
// console.log(...towns)
// console.log(...towns[0])

// const townsCopy = towns

// townsCopy.pop()
// townsCopy.pop()
// townsCopy.push('Juno')

// console.log({ towns, townsCopy })

// const townsClone = [...towns]

// townsClone.push('Aldebaran')

// console.log({ towns, townsCopy, townsClone })

// const townsObj = { ...towns }
// const townsObjClone = { ...townsObj }

// townsObjClone.test = 'Test'

// console.log({ townsObj, townsObjClone })

//?                                               AULA 9 - Rest params

// function sum(...numbers) {
//   return numbers.reduce((accum, num) => accum + num, 0)
// }

// console.log(sum(1, 1))
// console.log(sum(2, 2, 2, 2, 2))
// console.log(sum(32, 5, 74, 7, 1, 9, 90))

//?                                               AULA 10 - Encadeamento opcional

// const user = {
//   name: "John Doe",
//   email: "doejohn@email.com",
//   friends: [{
//     name: "Mary",
//     address: {
//       street: "Some Street",
//       number: 89
//     }
//   }],
//   age: 42,
//   phone: {
//     countryCode: "+55",
//     ddd: "22",
//     number: "998765432"
//   }
// }

// console.log(user.friends[0].phone.ddd)

// console.log(user?.friends[0]?.phone?.ddd)
// console.log(user?.brother?.name)

// console.log(user.brothers?.[5].name)

//?                                               AULA 11 - Operador de Coalescência Nula

// const a = 0 //false
// const b = null //false
// const c = "teste"

// console.log(a || b || c)

// console.log(b ?? a ?? c)

// let x = 0

// let y = a || 42

// console.log({ x, y })

// y = x ?? 42

// console.log({x, y})

// let z = false ?? 42

// console.log({z})