function buscarElemento(array, nombre) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === nombre) {
        return i;
      }
    }
    return -1; // No encontrado
  }
  