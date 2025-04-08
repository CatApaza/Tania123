function revertirArray(array) {
    let nuevoArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      nuevoArray.push(array[i]);
    }
    return nuevoArray;
  }
  