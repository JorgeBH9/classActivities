$(document).ready(function () {

    //This is a function that gets the current time
    function JSClock() {
        var time = new Date();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
        var temp = '' + ((hour > 12) ? hour - 12 : hour);
        if (hour == 0)
            temp = '12';
        temp += ((minute < 10) ? ':0' : ':') + minute;
        temp += ((second < 10) ? ':0' : ':') + second;
        return temp;
    }

    //This variable is executing the function to store what is generating
    var prueba = JSClock();

    //This piece is making the button work
    //when clicked writes something into the HTML and then disappears
    $('#startButton').on('click', function () {
        ('clicked', $("#startButton").hide());
        ('clicked', $(".timeCounter").text("Time Remaining: " + prueba));

        $('#startButton').on('click', function () {
            var newRBoption = 'input[type="radio"]';
            $('.questions').append(newRBoption);
        });



    });

});