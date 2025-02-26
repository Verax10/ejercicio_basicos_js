const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

let menores = "Usuarios menores de edad:";
let mayores = "Usuarios mayores de edad:";

for (const user of users) {
  if (user.years < 18) {
    menores += ` ${user.name},`;
  } else {
    mayores += ` ${user.name},`;
  }
}

// Eliminamos la última coma y mostramos los resultados
console.log(menores.slice(0, -1));
console.log(mayores.slice(0, -1));
