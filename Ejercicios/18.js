const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;

function pedirNumero() {
    readline.question("Ingresa un número (0 para terminar): ", input => {
        const num = parseFloat(input);
        if (num === 0) {
            console.log(`Suma total: ${suma}`);
            readline.close();
        } else {
            suma += num;
            pedirNumero();
        }
    });
}

pedirNumero();