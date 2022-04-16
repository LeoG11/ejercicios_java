//Inicializar el valor a 0
let count = 0;

//seleccionar el valor y botones
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//Funciones y Condiciones
//forEach aplica para cada uno de los elementos
btns.forEach(function (btn) {
    //evento click
    btn.addEventListener("click", function (e) {
        //La variable styles obtiene las clases de los botones
      const styles = e.currentTarget.classList;
      //Condiciones si contiene la clase
      if (styles.contains("decrease")) {
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else {
        count = 0;
      }
        //Condiciones del contador mayor, menor o igual 
      if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
      value.textContent = count;
    });
  });
