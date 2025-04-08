const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumero() {
    readline.question("Ingresa un número mayor que 0: ", input => {
        if (parseInt(input) > 0) {
            console.log("¡Número válido!");
            readline.close();
        } else {
            console.log("Inválido. Intenta nuevamente.");
            pedirNumero(); // Simula do...while
        }
    });
}

pedirNumero();