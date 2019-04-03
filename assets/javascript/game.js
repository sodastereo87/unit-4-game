
var counter = 0;
var targetNumber = 0;
var loseCounter = 0;
var winCounter = 0;

// generates a different random number between 1-12 for every image every time you win or lose the game, or refresh the page.

var imageCrystal = $("img.crystal-1");
function generateCrystalValues() {
    for (var i = 0; i < imageCrystal.length; i++) {
        var randomIndex = Math.floor((Math.random() * 12) + 1)
        $(imageCrystal[i]).attr("data-crystalvalue", randomIndex);
    };
}

// resets the counter of the score number to 0

generateCrystalValues();

function reset() {
    myFunction()
    counter = 0;
    $("#score").text(counter)
    generateCrystalValues();
}

// gives the option to click on every image and get a value

$(".crystal-1").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);


    // shows the number of wins or losses in the counter, and increase the value of the counter evry time you win or lose

    counter += crystalValue;
    $("#score").text(counter)
    if (counter === targetNumber) {
        winCounter += 1;
        $("#wins").text(winCounter);
        reset()

    }

    else if (counter >= targetNumber) {
        loseCounter += 1;
        $("#losses").text(loseCounter);
        reset()
    }

});

// generates random number between 19-120 that player has to reach to win

function myFunction() {
    var num = Math.floor((Math.random() * 120) + 19);
    document.getElementById("demo").innerHTML = num;
    targetNumber = num;
};

// generates random numbers betwee 19-120 when the page loads

window.onload = myFunction;
setTimeout(function () {
    console.log(document.getElementById('demo').value);
}, 500);


