//arreglo con los colores
const colors = ["green", "red", "rgba(133,122,200)",
"#f15025"];

//seleccionar el boton y el color
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//evento click
btn.addEventListener("click", function () {
    //obtiene un numero aleatorio de la funcion
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    //cambia el color 
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//funcion para obtener un numero aleatorio (redondenadolo al menor) de la posición del arreglo según su longitud
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length); 
}
