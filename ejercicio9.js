function sumNumbers(numberList) {
  let sum = 0; // Inicializamos la variable sum

  // Recorremos el array y sumamos cada número
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i]; // Sumamos el valor de cada elemento
  }

  return sum; // Devolvemos el resultado de la suma
}

// Array de prueba
const numbers = [1, 2, 3, 5, 45, 37, 58];

console.log(sumNumbers(numbers)); // Devuelve 151
