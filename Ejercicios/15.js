const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n1. Opción A\n2. Opción B\n3. Salir");
    readline.question("Elige una opción: ", opcion => {
        if (opcion === '3') {
            console.log("¡Hasta luego!");
            readline.close();
        } else {
            console.log(`Ejecutando opción ${opcion}...`);
            moastrarMenu(); // Repite el menú
        }
    });
}

mostrarMenu();