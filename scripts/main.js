const menu_items = document.querySelectorAll("header menu a");
const menu_button = document.querySelector(".menu-button");
const menu = document.querySelector("header menu");

var menu_is_showed = true;

// active clicked menu element

menu_items.forEach(menu => {
    menu.addEventListener("click", (e)=>{
        menu_items.forEach(element =>{
            element.classList.remove("menu-active");
        })
        e.target.classList.add("menu-active");
    });
});


// show and hidden menu 

menu_button.addEventListener("click", (e)=>{
    const icon = document.querySelector("header .menu-button");
    if(menu_is_showed){
        
        menu.style.display = "flex";
        menu.parentElement.style.height = "max-content";
        menu_is_showed = false

    }else{
        
        menu.style.display = "none";
        menu.parentElement.style.height = "100px";
        
        menu_is_showed = true;
    }

});
