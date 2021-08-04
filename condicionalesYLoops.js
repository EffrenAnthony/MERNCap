// tipos de datos

// primitivos
let cadena = ''
let numero = 0
let booleano = true
let float = 1.2

// no primitivos - Objetos
let arreglo = [1,2,43,5]
let arreglo2 = new Array(1,2,4,5)
let objetos = {
  nombre: "luciano",
  edad: 26,
  programador: true
}
function saludar1(){  
}

// Condiciones

function saludar(saludo){ 
  if (saludo === 'hola') {
    console.log(saludo)
  }else  if (saludo ==='luciano') {
    console.log('no saludaste bien')
  }
  if (saludo === 'gato') console.log(saludo + ' de gato')
  saludo === 'perro'
  ? console.log(saludo + `[perro]`)
  : saludo === 'luciano'
  ? console.log('saludo no es de perro, es de luciano')
  : console.log('saludo invalido')

  // if (saludo === 'perro') {
  //   console.log(saludo + `[perro]`)
  // } else if (saludo === 'luciano'){
  //   console.log('saludo no es de perro, es de luciano')
  // } else {
  //   console.log('saludo invalido')
  // }

  saludo === 'pedro' && console.log('saludo de pedro')

  // if (saludo === 'pedro') {
  //   console.log('saludo de pedro')
  // }
  
}

// saludar('pedro')

function switchCase(param){
  switch(param){
    case 'luciano':
      return 'luciano'
    case 'pedro':
      return 'pedro'
    case 'daniel':
      let sum = 10+ 10
      return 'daniel tiene ' + sum + 'años'
    default:
      console.log('no coincide')
      return 'no coincide'
  }
}

// const resultado = switchCase('tony')
// console.log(resultado)


// loops
let contador = 0
// while (contador < 10) {
//   console.log(contador)
//   // contador = contador + 1
//   // contador++
//   contador += 1
// }

// do{
//   console.log(contador)
//   // contador = contador + 1
//   // contador++
//   contador += 1
// } while (contador < 10)

// for (let index = 0; index < 10; index++) {
//   console.log(index)
// }

// REFERENCIAS
// let a = 1
// let b = 2
// let c = a + b
// let d = a
// a = 5

// let array = [1,2,3,4]
// let arrayNuevo = []
// let array2 = array
// array.push(5)

// for(let i = 0; i < array.length; i++){
//  arrayNuevo.push(array[i])
// }

// let arrayNuevoSpread = [...array]

// let obj = {a: 1, b:2}
// let obj2 = obj


// for(let arr of arreglo){
//   console.log(arr)
// }
let persona = {
  nombre: "luciano",
  edad: 26,
  programador: true
}
// let valor = 15
// console.log(`La edad de Lucia es ${valor + 5}`)
// console.log(`${persona.nombre}tiene ${persona.edad} años y es ${persona.programador === true ? 'programador' : 'otra cosa'}`)

// console.log(persona['nombre'])
// console.log(Object.keys(persona));
// console.log(Object.values(persona));

let arregloPalabras = ["p1",'p2','p3','p4']
// function callback(item){
//   console.log(item)
// }
// arregloPalabras.forEach(callback)
arregloPalabras.forEach(function (item){
  console.log(item)
})

// map
// reduce
// filter
// shift
// unshift
// pop
// push
// fill
// sort