//arreglo con elementos que forman un color hexadecimal
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", 
"D", "E", "F"];

//seleccionar el boton y el color
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//evento click
btn.addEventListener('click', function() {
let hexColor ="#";

//va de 0 a 6 elementos
for (let i = 0; i <6; i++) {
    //añade y asigna los valores obtenidos de la funcion
    hexColor += hex[getRandomNumber()];
}

//cambia el color 
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

//funcion para obtener un numero aleatorio (redondenadolo al menor) de la posición del arreglo según su longitud
function getRandomNumber() {
return Math.floor(Math.random() * hex.length);
}

