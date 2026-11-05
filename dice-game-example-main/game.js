// click on button 
document.querySelector("#rollButton").addEventListener("click", e =>{
    // 2. animate the die
    document.querySelectorAll("#gameboard img").forEach(image =>{
        // change image src to the animated gif
        image.src = "assets/die_rolling.gif";
    });

    // 3. land on a new random number
    setTimeout(() => {
        // this function will run after the timeout duration below
        setDieImages("assests/white_dice_6.gif");
        // Math.random()
        // Math.floor() rounds down to nearest whole int
        // 0 - 1, 0.35768435
    }, 1000 /* In miliseconds*/);

});

function setDieImages(imagePath) {
    document.querySelectorAll("#gameboard img").forEach(image => {
        image.src = imagePath;
    });
}