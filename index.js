// CREAR UNA PIRÁMIDE

const crearPiramide = () => {
    resultado = "";

    for (let i = 0; i < 10; i++) {
        resultado = resultado + "*";
        console.log(resultado);
    }
}

crearPiramide();



// ORDENAR DE MENOR A MAYOR, Y LUEGO DE MAYOR A MENOR

const numeros = [1, 4, 76, 2, 45, 99];

const ordenarNumeros = array => {
    const numerosDeMenorAMayor = array.sort();

    console.log(numerosDeMenorAMayor);

    const numerosDeMayorAMenor = numerosDeMenorAMayor.reverse();

    console.log(numerosDeMayorAMenor)
}

ordenarNumeros(numeros);



// CREAR UN STRING CON LOS ELEMENTOS DE UN ARRAY

const nombres = ["Candela", "Mariana", "Soledad", "Florencia"];

const obtenerAsistentes = array => {
    const asistentes = array.join(", ");

    console.log(`Quienes van a asistir a la fiesta son ${asistentes}`)
}

obtenerAsistentes(nombres);



// UNIR DOS ARRAYS

const mujeres = ["Candela", "Mariana", "Soledad", "Florencia"];

const hombres = ["Manuel", "Guido", "Ezequiel", "Gonzalo"];

const obtenerAsistentes = (mujeres, hombres) => {
    const asistentes = mujeres.concat(hombres);

    console.log(`Quienes van a asistir a la fiesta son ${asistentes}`)
}

obtenerAsistentes(mujeres, hombres);




// AGREGAR Y MODIFICAR PROPIEDADES DE UN OBJETO

const persona = {
    nombre: "Candela", 
    edad: 25, 
    profesion: "Comunicadora"
}

console.log(persona.profesion); // "Comunicadora"

persona.profesion = "Desarrolladora Frontend";

console.log(persona.profesion); // "Desarrolladora Frontend"



// UTILIZAR EL SPREAD OPERATOR PARA HACER UNA COPIA DE UN OBJETO

const copiaPersona = {...persona};

copiaPersona.nombre = "Marta";

console.log(copiaPersona); // El nombre es "Marta"
console.log(persona); // El nombre sigue siendo "Candela", porque el objeto original no se modificó



// CAPITALIZAR LA PRIMERA LETRA DE UNA PALABRA EN UN STRING
// Definí una función capitalizarPalabras tome un string y devuelva un string donde cada 
// palabra está capitalizada (con la primera letra mayúscula). 
// Dejá las demás letras como están.

const capitalizarPalabras = string => {
  const array = string.split(" ");

  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
      const primeraLetra = array[i].charAt(0).toUpperCase();
      const restoDeLaPalabra = array[i].slice(1).toLowerCase();
      const palabraCompleta = primeraLetra + restoDeLaPalabra;

      nuevoArray.push(palabraCompleta)
  }

  nuevoArray.join(" ");
}

capitalizarPalabras('Esto es un título');
capitalizarPalabras('había una vez');

// ACLARACIÓN: LA RESOLUCIÓN ES UN POCO COMPLICADA. DEBE HABER UNA MANERA MAS SIMPLE DE HACERLO.



// VER SI TODOS LOS ELEMENTOS DE UN ARRAY EXISTEN EN OTRO ARRAY
// Definí una función esSubconjunto que tome por parámetro dos arrays, 
// subconjunto y conjunto, y devuelva si subconjunto es realmente subconjunto de conjunto, 
// es decir, si todos los valores de subconjunto están en conjunto.

const esSubconjunto = (subconjunto, conjunto) => {
    const contieneTodos = subconjunto.every(element => {
        return conjunto.includes(element);
      });

    return contieneTodos;
  }

console.log(esSubconjunto([1, 2, 3], [1, 2, 3])); // true
console.log(esSubconjunto([1, 2, 9], [1, 2, 3, 4, 5])); // false



// SABER SI UN ARRAY TIENE UN CONJUNTO DE ELEMENTOS IGUALES CONSECUTIVOS
// Definí una función tieneBloque que tome por parámetro un array array y 
// devuelva si dicho array tiene un bloque de 3 o más ítems consecutivos idénticos.

const tieneBloque = array => {
    return array.some((element, index, array) => {
        return array[index] === array[index - 1] && array[index] === array[index + 1]
    })
  }

console.log(tieneBloque([1, 2, 3]));
console.log(tieneBloque([1, 1, 1]));



// COMPARAR SI UN STRING SE ESCRIBE IGUAL DE ATRAS PARA ADELANTE
// Definí una función esPalindromo que tome una palabra y devuelva 
// si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda 
// a derecha  que de derecha a izquierda.

const esPalindromo = palabra => {
    return palabra === palabra.split("").reverse().join("");
  }

// Split: convierte un string en un array
// Reverse: da vuelta un array (no sirve para aplicar directo sobre strings)
// Join: une los elementos de un array en un string

console.log(esPalindromo('ada')); // true
console.log(esPalindromo('reconocer')); // true
console.log(esPalindromo('javascript')); // false



// SABER SI UNA MATRIZ TIENE IGUAL CANTIDAD DE FILAS QUE DE COLUMNAS
// Definí una función esMatrizCuadrada que reciba como argumento un array 2d matriz 
// y devuelva si es una matriz cuadrada, es decir, si tiene igual cantidad de filas 
// que de columnas.

const esMatrizCuadrada = matriz => {
    let resultado = false;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            resultado = matriz.length === matriz[i].length;
        }
    }

    return resultado;
}

console.log(esMatrizCuadrada([[4, 5],[2, 7, 1],[8, 10],])); // false
console.log(esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],])); // true



// GENERAR UNA MATRIZ CON X CANTIDAD DE FILAS Y COLUMNAS
// Definí una función generarGrilla que tome por parámetro un número entero filas, 
// un número entero columnas y un array de valores items, y devuelva una matriz de filas filas 
// y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.


const generarGrillas = (filas, columnas, items) => {
    let matriz = [];

    let array = [];

    const elementoAleatorio = Math.floor(Math.random() * items.length);
    
    for (let i = 0; i < columnas; i++) {
        array.push(elementoAleatorio);
    }

    for (let j = 0; j < filas; j++) {
        matriz.push(array);
    }

    console.log(matriz);
  }

generarGrillas(2, 3, [1, 2]);

// ESTO FUNCIONA, PERO A DIFERENCIA DE LO QUE PIDE EL EJERCICIO, EL NUMERO ALEATORIO NO FUNCIONA
// COMO DEBERÍA. EN CAMBIO, TE TIRA UN ALEATORIO ENTRE 0 E ITEMS.LENGTH



// GENERAR MATRIZ ESCALONADA
// Definí una función generarMatrizEscalonada que reciba como argumento un número entero filas 
// y devuelva un array 2d con la cantidad de filas filas, donde la primera fila tiene 1 columna, 
// la segunda tiene 2, la tercera 3, y así sucesivamente. Los ítems de la matriz deben ser 0.

const generarMatrizEscalonada = filas => {
    let matriz = [];

    for (let i = 0; i < filas; i++) {
        let array = [0];
        for (let j = 0; j < i; j++) {
            array.push(0);
        }
        matriz.push(array);
    }

    console.log(matriz);
}

generarMatrizEscalonada(3);



// ENCONTRAR CUÁNTAS VECES SE REPITE UN ARRAY EN UN ELEMENTO
// Definí una función obtenerCantidad que tome un valor cualquiera item y una matriz items 
// y devuelva la cantidad de veces que item se encuentra dentro de items.

const obtenerCantidad = (item, items) => {
    let resultado = 0;

    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items[i].length; j++) {
            if (items[i][j] === item) {
                resultado++
            }
        }
    }

    return resultado;
}

obtenerCantidad('🍎', [
    ['🍎', '🍏', '🍌', '🍌'],
    ['🍌', '🍎'],
    ['🍎', '🍏', '🍌'],
    ['🍏', '🍌', '🍎', '🍌'],
  ])



// CONVERTIR EN MATRIZ
// Definí una función convertirEnMatriz que reciba como argumentos un número entero columnas y 
// un array array y devuelva una matriz con los items de array y la cantidad de columnas columnas 
// por fila. La última fila puede quedarse como menos columnas de las indicadas si no hay más ítems 
// que agregar.

// const convertirEnMatriz = (columnas, array) => {
//     let matriz = [];

//     for (let i = 0; i < columnas; i++) {
//         matriz.push(array.slice(0, columnas), array.slice(columnas));
//     }

//     console.log(matriz)
// }

// convertirEnMatriz(2, [1, 2, 3, 4]) // [[1, 2], [3, 4]]

// ESTA SOLUCIÓN NO FUNCIONA!

// LA SIGUIENTE, SÍ:

const convertirEnMatriz = (columnas, array) => {
    let matriz = [];
    while (array.length > 0) {
      matriz.push(array.splice(0, columnas));
    }
  
    return matriz;
  }

convertirEnMatriz(2, [1, 2, 3, 4]) // [[1, 2], [3, 4]]



// CONSULTAR TABLA
// Definí la función consultarTabla que tome por parámetro un número id, un string columna, 
// y una matriz tabla y que retorne el valor del dato de la columna dada para el registro con 
// el id indicado.

const tabla = [
    ['id', 'nombre', 'edad', 'email'],
    [1, 'Ada', 33, 'ada@gmail.com'],
    [2, 'Grace', 45, 'grace@gmail.com'],
  ]

const consultarTabla = (id, columna, tabla) => {
    let dato = "";

    for (let i = 0; i < tabla.length; i++) {
        for (let j = 0; j < tabla[i].length; j++) {
            if (columna === "nombre") {
                dato = tabla[id][1]
            }
            else if (columna === "edad") {
                dato = tabla[id][2];
            }
            else if (columna === "email") {
                dato = tabla[id][3]
            }
        }
    }

    return dato;
}

consultarTabla(1, "nombre", tabla);



// CHEQUEAR SI UNA MATRIZ TIENE 3 O MAS BLOQUES CONSECUTIVOS IGUALES
// Definí una función tieneBloqueHorizontal que reciba como argumento un array 2d matriz 
// y devuelva si dicha matriz tiene un bloque horizontal de 3 o más ítems consecutivos idénticos.

const tieneBloqueHorizontal = matriz => {
    let resultado = false;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === matriz[i][j - 1] && matriz[i][j] === matriz[i][j + 1]) {
                resultado = true;
            } 
        }
    }

    console.log(resultado)
}

tieneBloqueHorizontal([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])



// USO DE MAP: INCREMENTAR NUMEROS DE UN ARRAY * 10
// Usando map, definí una función numerosMasDiez que tome una lista de numeros y 
// devuelva un nuevo array incrementando cada elemento original en 10.

const numeros = [1, 2, 3, 4, 5];

const numerosMasDiez = numeros => {
    const numerosIncrementados = numeros.map((elemento) => {
        return elemento * 10;
    })

    return numerosIncrementados;
}

console.log(numerosMasDiez(numeros));



// USO DE MAP: MULTIPLICAR ELEMENTOS DE UN ARRAY * 2
// Usando map definí la función dobles que tome una lista de numeros y devuelva un nuevo array 
// con cada valor multiplicado por dos.

const numeros = [3, 7, 13, 99];

const dobles = numeros => {
    const numerosMultiplicados = numeros.map((elemento) => {
      return elemento * 2;
    })
    
    return numerosMultiplicados;
  }

console.log(dobles(numeros));



// USO DE MAP: CREAR FRASES CON SIGNOS DE EXCLAMACIÓN
// Usando map definí la función gritarTodas que tome una lista de frasescon frases al 
// azar y devuelva un nuevo array en donde cada frase empiece y termine con un signo de exclamación.

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

const gritarTodas = frases => {
    const frasesGritadas = frases.map(frase => {
      return `¡${frase}!`
    })
    
    return frasesGritadas;
  }

gritarTodas(frases);



// USO DE MAP: CREAR UNA LISTA DE <li>
// Usando map definí la función enlistar que tome una lista de libros con libros para 
// leer y devuelva un nuevo array en donde cada título de los libros esté dentro de 
// una etiqueta <li></li>.

const librosJS = ['JavaScript for Kids: A Playful Introduction to Programming','Composing Software','Eloquent JavaScript: A Modern Introduction to Programming','JavaScript: The Good Parts','Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries','Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript','JavaScript: The Definitive Guide','You Don’t Know JS','JavaScript Allongé: The Six Edition'];

const enlistar = libros => {
    const listaLibros = libros.map(libro => {
        return `<li>${libro}</li>`
    })

    return listaLibros;
}

console.log(enlistar(librosJS));



// USO DE MAP: OBTENER LONGITUDES 
// Usando map, definí una función longitudes que tome una lista de frases y 
// devuelva un nuevo array que contenga la longitud de cada frase.

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

const longitudes = frases => {
    const arrayLongitudes = frases.map(frase => frase.length)
    
    return arrayLongitudes;
  }

longitudes(frases);



// USO DE MAP: ENCONTRAR POSICIONES
// Usando map, definí la función posiciones que tome una lista de canciones de una playlist 
// y devuelva un nuevo array con los números de las posiciones de cada canción.

const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

const posiciones = canciones => {
    const cancionesConNumero = canciones.map((cancion, index) => `${index} - ${cancion}`)
    
    return cancionesConNumero;
  }

posiciones(playlist);



// USO DE FILTER: ENCONTRAR LOS VALORES MÁS ALTOS QUE 50
// Usando filter, definí la función losMasCaros que tome una lista de costos 
// que representan costos de diferentes productos y devuelva un nuevo array con los precios 
// más caros (mayores a 50).

const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]

const losMasCaros = costos => {
    const preciosMasCaros = costos.filter(costo => costo > 50)
    
    return preciosMasCaros;
  }

losMasCaros(costos);



// USO DE FILTER: ENCONTRAR NÚMEROS PARES E IMPARES
// Usando filter, definí la función separandoPares que tome una lista de numeros 
// con números al azar y devuelva un nuevo array con los números pares. 
// Y otra función separandoImpares que también tome una lista de números y 
// devuelva un nuevo array con los números impares.

const numeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];

const separandoPares = numeros => {
    const pares = numeros.filter(numero => numero % 2 === 0)
    
    return pares;
  }
  
  const separandoImpares = numeros => {
    const impares = numeros.filter(numero => numero % 2 !== 0)
    
    return impares;
  }

separandoPares(numeros);
separandoImpares(numeros);



// USO DE FILTER: QUEDARME SOLO CON EL TIPO DE DATO QUE QUIERO
// Usando filter, definí la función soloStrings que tome una lista de mix con 
// varios elementos de distintos tipos de datos y devuelva un nuevo array que 
// contenga sólo los datos de tipo string.

const mix = [ 'Ut vero.',2 , function () { console.log('hola mundo!') }, 56, 'Diam rebum nonumy et.', true, false,'Kasd stet.', 'Sit et dolor.', null, null, [ 1, 2, 3], 'Dolore.'];

const soloStrings = mix => {
    const strings = mix.filter(dato => typeof dato === "string")
    
    return strings;
  }

soloStrings(mix);



// USO DE FILTER: QUEDARME SOLO CON LAS CANCIONES QUE NO ESCUCHE
// Usando filter, definí la función playlistSinEscuchar que tome una lista playlist 
// con canciones sugeridas y otra lista playlistEscuchada con canciones que ya escuchamos 
// y devuelva un array con aquellas canciones de la playlist que no están en playlistEscuchada.

const playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];

const playlistSinEscuchar = (playlist, playlistEscuchada) => {
    const cancionesSinEscuchar = playlist.filter(cancion => !playlistEscuchada.includes(cancion))
    
    return cancionesSinEscuchar;
  }

playlistSinEscuchar(playlist, playlistEscuchada);