//Author Innocent

function grains() {
  let totales = 0;
  let value = 0;

  for (let squareNumber = 0; squareNumber <= 64; squareNumber++) {
    for (let squareGrains = 1; squareGrains <= 64; squareGrains++) {
      let value = Math.pow(squareGrains, 2);
      squareNumber += 1;
      if (value == 1) {
        document.write(
          "Square" + "[" + squareNumber + "]: " + value + " Grain" + "</br>"
        );
      } else {
        document.write(
          "Square" + "[" + squareNumber + "]: " + value + " Grains" + "</br>"
        );
      }
      console.log((totales = totales + value));
      /* DISABLE THIS --" COMMENT BELOW LINE "  -- IF YOU DON'T WANT TO SEE SUM UNTIL DETERMINATE VALUE  */
      document.write("Sum:" + totales + "<br/>");

      document.write("<hr>");
      if (squareGrains == 64) {
        document.write("Total grains sum:" + totales + "<br/>");
      }
    }
    // document.write("Total grains: 89440");
  }
}

const button = document.querySelector("#calculateButton");

button.addEventListener("click", () => {
  button.style.backgroundColor = "blue";
  // list.textContent = "Total is: " + value;
});
