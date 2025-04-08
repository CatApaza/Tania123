const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ejercicio 1: Sumar elementos de un array
async function sumarElementos(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
// Llamada a la función con un array de ejemplo
async function ejecutarEjercicio1() {
    const array = [1, 2, 3, 4, 5];  // Este es el array que vamos a sumar
    const suma = await sumarElementos(array);  // Se pasa el array como argumento
    console.log("Suma de elementos:", suma);
  }

// Ejercicio 2: Número mayor y menor
async function mayorYMenor(arr) {
  return { mayor: Math.max(...arr), menor: Math.min(...arr) };
}

// Ejercicio 3: Contar elementos pares
async function contarPares(arr) {
  return arr.filter(num => num % 2 === 0).length;
}

// Ejercicio 4: Ordenar un array
async function ordenarArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

// Ejercicio 5: Buscar un elemento
async function buscarElemento(arr, elem) {
  const index = arr.indexOf(elem);
  return index !== -1 ? index : "Elemento no encontrado";
}

// Ejercicio 6: Revertir un array
async function revertirArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// Ejercicio 7: Convertir nombres a mayúsculas
async function convertirMayusculas(arr) {
  return arr.map(name => name.toUpperCase());
}

// Ejercicio 8: Sumar solo los números positivos
async function sumarPositivos(arr) {
  return arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
}

// Ejercicio 9: Obtener el primer múltiplo de 5
async function primerMultiploDe5(arr) {
  return arr.find(num => num % 5 === 0);
}

// Ejercicio 10: Tabla de multiplicar
async function tablaDeMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Ejercicio 11: Generar una secuencia de Fibonacci
async function fibonacci() {
  let a = 0, b = 1;
  console.log("Secuencia Fibonacci:");
  for (let i = 0; i < 10; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
}

// Ejercicio 12: Adivinar un número
async function adivinarNumero() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let adivinado = false;
  while (!adivinado) {
    const respuesta = await pedirNumero("Adivina el número entre 1 y 10:");
    if (respuesta === numeroSecreto) {
      console.log("¡Adivinaste!");
      adivinado = true;
    } else {
      console.log("Intenta de nuevo.");
    }
  }
}

// Ejercicio 13: Contar regresivamente desde un número
async function contarRegresivamente() {
  let numero = await pedirNumero("Ingresa un número para contar regresivamente:");
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
}

// Ejercicio 14: Validar entrada de usuario
async function validarEntrada() {
  let numero;
  do {
    numero = await pedirNumero("Ingresa un número mayor que 0:");
  } while (numero <= 0);
  console.log("Número válido:", numero);
}

// Ejercicio 15: Mostrar menú hasta que el usuario salga
async function mostrarMenu() {
  let opcion;
  do {
    console.log("1. Opción 1");
    console.log("2. Opción 2");
    console.log("3. Salir");
    opcion = await pedirNumero("Elige una opción:");
  } while (opcion !== 3);
  console.log("Saliendo del menú.");
}

// Ejercicio 16: Sumar solo los números impares entre 1 y 50
async function sumarImpares() {
  let suma = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      suma += i;
    }
  }
  console.log("Suma de impares entre 1 y 50:", suma);
}

// Ejercicio 17: Contador de intentos
async function contadorDeIntentos() {
  let intentos = 3;
  while (intentos > 0) {
    const usuario = await pedirTexto("Introduce tu contraseña:");
    if (usuario === "1234") {  // Cambia la contraseña por la correcta
      console.log("Acceso concedido");
      break;
    } else {
      intentos--;
      console.log(`Intentos restantes: ${intentos}`);
    }
  }
}

// Ejercicio 18: Sumar hasta que el usuario ingrese 0
async function sumarHastaCero() {
  let suma = 0;
  let num;
  do {
    num = await pedirNumero("Ingresa un número para sumar (0 para detenerte):");
    suma += num;
  } while (num !== 0);
  console.log("Suma total:", suma);
}

// Ejercicio 19: Imprimir la serie de Fibonacci hasta que un número supere 100
async function fibonacciHasta100() {
  let a = 0, b = 1;
  console.log("Fibonacci hasta que un número supere 100:");
  while (a <= 100) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
}

// Ejercicio 20: Imprimir los múltiplos de 3 hasta 50
async function multiplesDeTres() {
  for (let i = 3; i < 50; i += 3) {
    console.log(i);
  }
}

// Función para pedir un número
function pedirNumero(mensaje) {
  return new Promise((resolve) => {
    rl.question(mensaje, (respuesta) => {
      resolve(parseInt(respuesta));
    });
  });
}

// Función para pedir un texto
function pedirTexto(mensaje) {
  return new Promise((resolve) => {
    rl.question(mensaje, (respuesta) => {
      resolve(respuesta);
    });
  });
}

// Ejecutar todos los ejercicios
async function ejecutarTodos() {
  console.log("\n--- Ejercicio 1 ---");
  console.log("Suma de elementos:", await sumarElementos([1, 2, 3, 4, 5]));
  
  console.log("\n--- Ejercicio 2 ---");
  console.log("Mayor y Menor:", await mayorYMenor([5, 3, 9, 1, 7]));

  console.log("\n--- Ejercicio 3 ---");
  console.log("Cantidad de números pares:", await contarPares([5, 2, 8, 7, 4]));
  
  console.log("\n--- Ejercicio 4 ---");
  console.log("Array ordenado:", await ordenarArray([5, 2, 8, 1, 3]));
  
  console.log("\n--- Ejercicio 5 ---");
  console.log("Posición del elemento:", await buscarElemento(["Ana", "Pedro", "Luis"], "Pedro"));
  
  console.log("\n--- Ejercicio 6 ---");
  console.log("Array revertido:", await revertirArray([1, 2, 3, 4]));
  
  console.log("\n--- Ejercicio 7 ---");
  console.log("Nombres en mayúsculas:", await convertirMayusculas(["ana", "pedro", "luis"]));
  
  console.log("\n--- Ejercicio 8 ---");
  console.log("Suma de números positivos:", await sumarPositivos([-5, 10, -3, 4, 7]));
  
  console.log("\n--- Ejercicio 9 ---");
  console.log("Primer múltiplo de 5:", await primerMultiploDe5([1, 2, 3, 4, 5, 10]));
  
  console.log("\n--- Ejercicio 10 ---");
  await tablaDeMultiplicar(3);
  
  console.log("\n--- Ejercicio 11 ---");
  await fibonacci();
  
  console.log("\n--- Ejercicio 12 ---");
  await adivinarNumero();
  
  console.log("\n--- Ejercicio 13 ---");
  await contarRegresivamente();
  
  console.log("\n--- Ejercicio 14 ---");
  await validarEntrada();
  
  console.log("\n--- Ejercicio 15 ---");
  await mostrarMenu();
  
  console.log("\n--- Ejercicio 16 ---");
  await sumarImpares();
  
  console.log("\n--- Ejercicio 17 ---");
  await contadorDeIntentos();
  
  console.log("\n--- Ejercicio 18 ---");
  await sumarHastaCero();
  
  console.log("\n--- Ejercicio 19 ---");
  await fibonacciHasta100();
  
  console.log("\n--- Ejercicio 20 ---");
  await multiplesDeTres();
}

// Iniciar ejecución de todos los ejerciciosss
ejecutarTodos();
