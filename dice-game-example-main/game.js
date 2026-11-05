// click on button 
document.querySelector("#rollButton").addEventListener("click", e =>{
    // 2. animate the die
    document.querySelectorAll("#gameboard img").forEach(image =>{
        // change image src to the animated gif
        image.src = "assets/die_rolling.gif";
    });

});