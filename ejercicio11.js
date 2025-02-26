function averageWord(list) {
  let sum = 0; // Inicializamos la variable sum
  let count = 0; // Inicializamos el contador para los elementos procesados

  // Recorremos el array y procesamos cada elemento
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      sum += list[i]; // Si es un número, lo sumamos
    } else if (typeof list[i] === 'string') {
      sum += list[i].length; // Si es un string, sumamos la longitud
    }
    count++; // Contamos el elemento procesado
  }

  // Calculamos el promedio de todos los elementos procesados
  let avg = sum / count;

  return avg; // Devolvemos el promedio
}

// Array de prueba
const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

console.log(averageWord(mixedElements)); // Devuelve el promedio
