function average(numberList) {
  let sum = 0; // Inicializamos la variable sum

  // Recorremos el array y sumamos cada número
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i]; // Sumamos el valor de cada elemento
  }

  // Calculamos el promedio dividiendo la suma entre la cantidad de elementos
  let avg = sum / numberList.length;

  return avg; // Devolvemos el promedio
}

// Array de prueba
const numbers = [12, 21, 38, 5, 45, 37, 6];

console.log(average(numbers)); // Devuelve 23.571428571428573
