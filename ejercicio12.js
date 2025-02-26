function removeDuplicates(list) {
  let uniqueList = []; // Creamos un nuevo array para almacenar los elementos únicos

  // Recorremos el array original
  for (let i = 0; i < list.length; i++) {
    // Si el elemento no está ya en el array de elementos únicos, lo agregamos
    if (!uniqueList.includes(list[i])) {
      uniqueList.push(list[i]);
    }
  }

  return uniqueList; // Devolvemos el array con los elementos únicos
}

// Array de prueba
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

console.log(removeDuplicates(duplicates)); // Devuelve el array sin duplicados
