function nameFinder(nameList, nameToFind) {
  // Usamos indexOf para encontrar la posición del nombre
  const index = nameList.indexOf(nameToFind);

  // Si el índice es diferente de -1, significa que el nombre se encontró
  if (index !== -1) {
    return { found: true, position: index }; // Devuelve un objeto con true y la posición
  } else {
    return { found: false }; // Si no se encuentra, devuelve solo false
  }
}

// Array de prueba
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

// Pruebas
console.log(nameFinder(names, 'Tony')); // Devuelve { found: true, position: 2 }
console.log(nameFinder(names, 'Bruce')); // Devuelve { found: true, position: 7 }
console.log(nameFinder(names, 'Wanda')); // Devuelve { found: false }
