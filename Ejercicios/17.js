const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const PASSWORD = "secreto";
let intentos = 3;

function intentoLogin() {
    readline.question("Contraseña: ", input => {
        if (input === PASSWORD) {
            console.log("¡Acceso concedido!");
            readline.close();
        } else {
            intentos--;
            if (intentos > 0) {
                console.log(`Contraseña incorrecta. Te quedan ${intentos} intentos.`);
                intentoLogin();
            } else {
                console.log("¡Acceso bloqueado!");
                readline.close();
            }
        }
    });
}

intentoLogin();