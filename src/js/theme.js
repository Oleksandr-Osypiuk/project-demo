const toggle = document.querySelector(".switch__checkbox");
toggle.addEventListener("click", function(e) { 
    e.preventDefault;
    e.target.classlist.toggle(".dark__theme")
})