let a = 0, b = 1;
console.log("Serie de Fibonacci hasta superar 100:");
while (a <= 100) {
    console.log(a);
    [a, b] = [b, a + b];
}