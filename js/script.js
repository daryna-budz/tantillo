
function showMenu(){
    const menu = document.getElementById("fullscreenMenu");
    menu.classList.toggle('show');
}

function closeMenu(){
    const menu = document.getElementById("fullscreenMenu");
    menu.classList.remove('show');
}

/*** reservations ***/



//Dropdown 1
const dropdown = document.querySelector(".dropdown");
const select = document.querySelector(".select");
const caret = document.querySelector(".caret");
const menu = document.querySelector(".menu-size");
const options = document.querySelectorAll(".menu-size li");
const selected = document.querySelector(".selected");


//Dropdown 2

const dropdown_time = document.querySelector(".dropdown-time");
const select_time = document.querySelector(".select-time");
const caret_time = document.querySelector(".caret-time");
const menu_time = document.querySelector(".menu-time");
const options_time = document.querySelectorAll(".menu-time li");
const selected_time = document.querySelector(".selected-time");


function setDropdown(selectElement, menuElement, selectedElement, options){
    selectElement.addEventListener("click", () => {
        selectElement.classList.toggle("select-clicked");
        menuElement.classList.toggle("menu-open");
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            selectedElement.innerText = option.innerText;
            selectElement.classList.remove("select-clicked");
            menuElement.classList.remove("menu-open");
            options.forEach(opt => {
                opt.classList.remove("active");
            });
            option.classList.add("active");
        });
    });
}

setDropdown(select,menu,selected,options);
setDropdown(select_time,menu_time,selected_time,options_time);

config = {
    dateFormat: "M j, Y",
    defaultDate: "today",
}
flatpickr(".datetime", config);  //flatpickr used for custom data picker


function bookNow(){
    Swal.fire({
        title: "You are all set!",
        text: "Can't wait to see ya!:D",
        icon: "success",
        iconColor: "#2e7849",
        confirmButtonColor: "#2e7849",
        background: "#e8eb9e",
        color: "#194027"
      });
    setTimeout(function() {
        location.reload();
    }, 2000);
}




