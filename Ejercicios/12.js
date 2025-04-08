const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function adivinar() {
    readline.question("Adivina un número del 1 al 10: ", input => {
        intentos++;
        if (parseInt(input) === numeroAleatorio) {
            console.log(`¡Correcto! Lo lograste en ${intentos} intentos.`);
            readline.close();
        } else {
            console.log("Incorrecto. Intenta nuevamente.");
            adivinar(); // Simula while con recursión
        }
    });
}

adivinar();