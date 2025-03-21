const menu_items = document.querySelectorAll("header menu a");


// active clicked menu element

menu_items.forEach(menu => {
    menu.addEventListener("click", (e)=>{
        menu_items.forEach(element =>{
            element.classList.remove("menu-active");
        })
        e.target.classList.add("menu-active");
    });
});