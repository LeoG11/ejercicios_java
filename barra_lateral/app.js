//Seleecionar elementos y boton

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const btnClose = document.querySelector('.close-btn');

sidebarToggle.addEventListener("click", function () {
    console.log(sidebar.classList);
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");
    } else {
        sidebar.classList.add("show-sidebar");
    }
    //*** sidebar.classList.toggle("show-sidebar");
});

btnClose.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});