function repeatCounter(list) {
  const wordCount = {}; // Objeto para almacenar la cantidad de repeticiones de cada palabra

  // Recorremos el array
  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    
    // Si la palabra ya existe en el objeto, incrementamos su contador
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      // Si la palabra no existe, la inicializamos con valor 1
      wordCount[word] = 1;
    }
  }

  // Devolvemos el objeto que contiene las repeticiones
  let result = '';
  for (let word in wordCount) {
    result += `${word}: ${wordCount[word]}, `;
  }

  // Elimina la última coma y espacio extra
  return result.slice(0, -2);
}

// Array de prueba
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

console.log(repeatCounter(words)); // 'code: 4, repeat: 1, eat: 1, sleep: 3, enjoy: 2'
