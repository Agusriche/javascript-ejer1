//entrega complementaria NUMERO 1

// var numero = 1;
// while (numero < 11) {
//     console.log(numero + " - " + (11 - numero));
//     numero++;
// }




// sistema de "entradas" y restantes ENTREGA Nº1
// var entradastotal = 10;

// while (entradastotal > 0) {

// }


// entrega Numero 1 :D

/*
function soliname() {
    let nombreIngresado = prompt("Ingresar nombre");
    alert("El nombre ingresado es " + nombreIngresado);
}
soliname();

*/
//entrega 1 no complementearia


function encontrarElementoMasFrecuente(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    let conteo = {};

    for (const e of datos) {
        if (conteo[e]) {
            conteo[e] += 1;
        } else {
            conteo[e] = 1;
        }
    }

    let mayorConteo = 0;
    let dato = null;
    let llaves = Object.keys(conteo);

    for (let i = 0; i < llaves.length; ++i) {
        if (conteo[llaves[i]] > mayorConteo) {
            dato = llaves[i];
            mayorConteo = conteo[llaves[i]];
        }
    }

    return dato;
}

let datos = ['A', 'B', 'A', 'F', 'Z', 'A', 'C', 'D'];

try {
    console.log(encontrarElementoMasFrecuente(datos)); // 'A'
} catch (e) {
    console.log(`Error: ${e.message}`);
}