function sumarElementos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

const numeros = [2, 4, 6, 8];
const resultado = sumarElementos(numeros);
console.log(`La suma de los elementos es: ${resultado}`);
