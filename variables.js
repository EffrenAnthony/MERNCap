let perro = 'cobalto'
var gato = 'nar'
const prof = 'Luciano'

console.log(perro, gato, prof)

function func() {
  console.log('función')
}

func()

// const nombre = 'Pedro'
let perroGlobal = 'perroGlobal'
function func2(){
  console.log(perroGlobal)
  let perroFuncion = 'perroFuncion'
  {
    var perro3 = 'perro3Let'
    console.log(perro3 + '[blocque]')
    console.log(perroGlobal + '[blocque]')
    console.log(perroFuncion + '[blocque]');
  }
  console.log(perro3)
  console.log(perroFuncion);
}
// console.log(perro3)

func2()