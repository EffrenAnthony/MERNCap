// tipos de datos

// primitivos
let cadena = ''
let numero = 0
let booleano = true
let float = 1.2

// no primitivos
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

saludar('pedro')

