function Obtener(obj) {
    //Obtener y Recorrer las Llaves de un Objeto
    //Aqui tu codigo
    let entorno = {
        entorno: "GitHub",
        nombre: "Juan",
        edad: 27
      };
      
      let values = Object.keys(entorno);
      for(let i=0; i < values.length; i++){
        let valor = values[i];
        console.log([valor],'->',entorno[valor])
          
      }

}
console.log(Obtener())

  


let days = ['Lunes','Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
function Fecha(num){
     //Escriba una función de JavaScript para obtener el día de una fecha en particular.
    //Aqui tu codigo
let dia = new Date(num); 
    return(days[dia.getDay()-1]);
}
console.log(Fecha('03/02/1995'))


function verificarPassword(password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    
        var usuario = ({
            password : 1234
        })
        if(password === usuario.password){
            return true
        }else {
            return false
        }
}
console.log(verificarPassword(1234))



function crearGato(nombre, edad) {
        // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
        // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
        // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
        // Devuelve el objeto
        // Tu código:
        var nuevoObjeto = {
            nombre: nombre, 
            edad: edad, 
            funcion: funct
funcion: function () {
                return 'meow!'
            }
        };



        return nuevoObjeto.funcion()
    } 
    
    console.log(crearGato('negro', 3));

function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:

const Producto = {
    precio : producto,
    descuento : producto *0.2,
    calcularPrecioDescuento: function(producto) {
        let preciocondescuento = Producto.precio - Producto.descuento;
        return preciocondescuento;
    }
    }
    console.log(Producto.calcularPrecioDescuento())
}

console.log(agregarMetodoCalculoDescuento(1000000))

}
function ordenar(array) {
    // A partir del array pasado por parametros, ordenarlo (ascendente o descendente) de la forma que tu quieras
    // Mostrar array ordenado.
    // Tu código:
}

