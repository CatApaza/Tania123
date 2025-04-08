const ejercicios = Array.from({ length: 20 }, (_, i) => `./Ejercicios/${i + 1}.js`);

(async () => {
  for (const ejercicio of ejercicios) {
    console.log(`\n=== Ejecutando ${ejercicio} ===`);
    try {
      require(ejercicio);
    } catch (error) {
      console.error(`Error en ${ejercicio}:`, error.message);
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Pausa 1s entre ejercicios
  }
})();