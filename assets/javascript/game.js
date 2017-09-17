$(document).ready(function() {

    var win = 0;
    var lose = 0;
    $("#winner").text("WINS  " + win);
    $("#loser").text("LOSE  " + lose);


    var randomnumber = Math.floor(Math.random() * 101) + 19;

    console.log("random# " + randomnumber);

    function getNumber() {
        $(".rNumberBox").html(randomnumber);
        return false;
    }

    getNumber();

    //jquery data attribute button

    var diamond = Math.floor(Math.random() * 12) + 1
    var ruby = Math.floor(Math.random() * 12) + 1
    var sapphire = Math.floor(Math.random() * 12) + 1
    var topaz = Math.floor(Math.random() * 12) + 1

    console.log("diamond " + diamond);
    console.log("ruby " + ruby);
    console.log("sapphire" + sapphire);
    console.log("topaz " + topaz);
    console.log("------------");

    //$(document).on("click", "button", function() {



    var sum = 0;

    $("#diamond").on("click", function() {
        sum = sum + parseInt(diamond);
        $("#yourGuess").text(sum);


        if (sum === randomnumber) {
            win++;
            $("#winner").text("WINS  " + win);
            alert("WINNER!!!");

            sum = 0;
            $("#yourGuess").text(sum);
            var rando = Math.floor(Math.random() * 101) + 19;
            $(".rNumberBox").html(rando);

        } else if (sum > randomnumber) {

            lose++;
            $("#loser").text("LOSE  " + lose);
            alert("LOSER!!!")

            sum = 0;
            $("#yourGuess").text(sum);
            var rando = Math.floor(Math.random() * 101) + 19;
            $(".rNumberBox").html(rando);
        }



    });

    $("#ruby").on("click", function() {
        sum = sum + parseInt(ruby);
        $("#yourGuess").text(sum);

        if (sum === randomnumber) {
            win++;
            $("#winner").text("WINS  " + win);
            alert("WINNER!!!");

            sum = 0;
            $("#yourGuess").text(sum);
            var rando = Math.floor(Math.random() * 101) + 19;
            $(".rNumberBox").html(rando);

        } else if (sum > randomnumber) {

            lose++;
            $("#loser").text("LOSE  " + lose);
            alert("LOSER!!!")

            sum = 0;
            $("#yourGuess").text(sum);
            var rando = Math.floor(Math.random() * 101) + 19;
            $(".rNumberBox").html(rando);
        }

    });

    $("#sapphire").on("click", function() {
        sum = sum + parseInt(sapphire);
        console.log(sum);
        $("#yourGuess").text(sum);

        if (sum === randomnumber) {
            win++;
            $("#winner").text("WINS  " + win);
            alert("WINNER!!!");

            sum = 0;
            $("#yourGuess").text(sum);
            var rando = Math.floor(Math.random() * 101) + 19;
            $(".rNumberBox").html(rando);

        } else if (sum > randomnumber) {

            lose++;
            $("#loser").text("LOSE  " + lose);
            alert("LOSER!!!")

            sum = 0;
            $("#yourGuess").text(sum);
            var rando = Math.floor(Math.random() * 101) + 19;
            $(".rNumberBox").html(rando);
        }
    });

    $("#topaz").on("click", function() {
        sum = sum + parseInt(topaz);
        console.log(sum);
        $("#yourGuess").text(sum);

        if (sum === randomnumber) {
            win++;
            $("#winner").text("WINS  " + win);
            alert("WINNER!!!");

            sum = 0;
            $("#yourGuess").text(sum);
            var rando = Math.floor(Math.random() * 101) + 19;
            $(".rNumberBox").html(rando);

        } else if (sum > randomnumber) {

            lose++;
            $("#loser").text("LOSE  " + lose);
            alert("LOSER!!!")

            sum = 0;
            $("#yourGuess").text(sum);
            var rando = Math.floor(Math.random() * 101) + 19;
            $(".rNumberBox").html(rando);
        }
    });


});