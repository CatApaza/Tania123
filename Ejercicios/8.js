function sumarPositivos(array) {
    return array.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
  }
  