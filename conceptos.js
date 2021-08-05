

//hoisting
// funcionNormal()
// const funcionFlecha = () => {
//   console.log('flecha');
// }


// function funcionNormal(){
//   console.log('function');
// }
// funcionFlecha()

//typeof

// console.log(typeof(['']));
// console.log(typeof(1));
// console.log(typeof(true));
// console.log(typeof(NaN));
// console.log(typeof(null));
// console.log(typeof(undefined));

// function funcion(string){
//   if (typeof(string) !== 'string') {
//     console.log('[Error], aqui solo puede haber string')
//   } else {
//     console.log('ejecución de la funcion');
//   }
// }


// funcion('Strin asdf asd')

// destructuración

let objeto = {
  nombre: "luciano",
  edad: "26",
  estudios: {
    universidad: "unsa",
    colegio: "la salle",
    jardin: {
      cinco: "xxx",
      cuatro: "sdf"
    }
  }
}

// let nombre = objeto.nombre
// let colegio = objeto.estudios.colegio

let { nombre,
      edad,
      estudios:{
        universidad,
        jardin:{
          cinco
        }
      },
    } = objeto;


console.log(`${nombre} ${cinco} ${universidad}`)