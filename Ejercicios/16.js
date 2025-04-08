let suma = 0;
let i = 1;

for (; i <= 50; i++) {
    if (i % 2 !== 0) {
        suma += i;
        if (suma > 500) {
            console.log(`Suma superó 500 en el número ${i}. Suma actual: ${suma}`);
            break;
        }
    }
}

console.log(`Suma total de impares (hasta ${i}): ${suma}`);