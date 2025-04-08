const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingresa un número para la cuenta regresiva: ", num => {
    let n = parseInt(num);
    while (n >= 0) {
        console.log(n);
        n--;
    }
    readline.close();
});