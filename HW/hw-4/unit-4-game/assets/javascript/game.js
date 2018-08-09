$(document).ready(function () {

    //This function runs whenever called to generate a random number between a given min and max parameters.
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    // * Each time the game starts should have a random generated value between 19 - 120.
    var valueBetween19and120 = getRandomInt('19', '120');

    console.log(valueBetween19and120);

    //------------------------------------------------------------------------------------------------

    // * Each crystal should have a random hidden value between 1 - 12.
    //I´m creating a variable that stores a value between 0 & 12 for each one of the buttons I´m going to use

    var numForButton1 = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log(numForButton1);
    var numForButton2 = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log(numForButton2);
    var numForButton3 = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log(numForButton3);
    var numForButton4 = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log(numForButton4);

    //------------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------------


    //This is the id in which is going to be displayed randomNumberDisplay
    $("#randomNumberDisplay").text(valueBetween19and120);

    //This is only to console log that I´m getting the event click on specific button
    $("#Button1").on("click", function () {
        $(this).val(numForButton1);
        $("#valueOfUserSelections").text("Button1 was clicked");
        console.log(Button1.value);
    });

    $("#Button2").on("click", function () {
        $(this).val(numForButton2);
        $("#valueOfUserSelections").text("Button2 was clicked");
        console.log(Button2.value);
    });

    $("#Button3").on("click", function () {
        $(this).val(numForButton3);
        $("#valueOfUserSelections").text("Button3 was clicked");
        console.log(Button3.value);
    });

    $("#Button4").on("click", function () {
        $(this).val(numForButton4);
        $("#valueOfUserSelections").text("Button4 was clicked");
        console.log(Button4.value);
    });



});