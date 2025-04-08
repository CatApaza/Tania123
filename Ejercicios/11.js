let a = 0, b = 1;
console.log("Serie de Fibonacci (primeros 10 números):");
for (let i = 0; i < 10; i++) {
    console.log(a);
    [a, b] = [b, a + b];
}