function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne); // Devuelve el número más alto
  } else if (numberTwo > numberOne) {
    console.log(numberTwo); // Devuelve el número más alto
  } else {
    console.log("Ambos números son iguales"); // En caso de que sean iguales
  }
}

greaterNumber(10, 20);
greaterNumber(30, 15)
greaterNumber(50, 50)