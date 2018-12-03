$(document).ready(function () {
    var num = 5;
    var trueAnswer;
    var trigger = true;
    var questions = [{
        question: "How the Grinch Stole Christmas is a 2000 American Christmas fantasy comedy film starring which actor as the Grinch?",
        answers: ["Jim Carrey", "Johnny Depp", "Brad Pitt", "Tom Hanks"],
        correctAnswer: "Jim Carrey",
        image: "assets/images/toystory.gif"
    }, {
        question: "Who is the author of the “Harry Potter” books?",
        answers: ["Ernest Hemingway", "Mark Twain", "Stephen King", "J. K. Rowling"],
        correctAnswer: "J. K. Rowling",
        image: "assets/images/spicegirls.gif"
    }, {
        question: "Which NBA team won the most titles in the 90s?",
        answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
        correctAnswer: "Chicago Bulls",
        image: "assets/images/bulls.gif"
    }];


    var myTimer = function () {

        if (trigger) {


            setTimeout(function () {
                if (trigger) {
                num--;

                $('.lead').text('Time : ' + num);
                if (num <= 0) {
                    console.log('game Over');
                    trigger= false;
                    timesUP();

                }
                myTimer();}
            }, 3000);
        };
    }
    var shuffleA = function (a) {

        var asw = a.answers;

        for (i = 0; i < 5; i++) {

            $('#a' + (i + 1)).text(asw[i]);
        }
    }

    var lost = () => {
        $('#question').addClass('hide');
        $('#lost').removeClass('hide');
        trigger = false;
    }
    var win = () => {
        $('#question').addClass('hide');
        $('#Win').removeClass('hide');
        trigger = false;
    }
    var timesUP = () => {
        $('#question').addClass('hide');
        $('#TU').removeClass('hide');
        trigger = false;
    }
    var generateQ = function () {

        var num = Math.floor(Math.random() * questions.length);
        var q = questions[num];
        $('#q').text(q.question);
        trueAnswer = q.correctAnswer;
        shuffleA(q);
    }

    $('#a1').click(function () {
        var selected = $(this).text();
        console.log(selected);
        if (trueAnswer == selected) {
            win();
        } else {
            lost();
        }
    });
    $('#a2').click(function () {
        var selected = $(this).text();
        console.log(selected);
        if (trueAnswer == selected) {
            win();
        } else {
            lost();
        }
    });
    $('#a3').click(function () {
        var selected = $(this).text();
        console.log(selected);
        if (trueAnswer == selected) {
            win();
        } else {
            lost();
        }
    });
    $('#a4').click(function () {
        var selected = $(this).text();
        console.log(selected);
        if (trueAnswer == selected) {
            win();
        } else {
            lost();
        }
    });

    $('#start-btn').click(function () {
        $('.lead').removeClass('hide');
        $('#question').removeClass('hide');
        $(this).addClass('hide');
        num = 5;
        $('.lead').text('Time : ' + num);
        trigger = true;
        myTimer();
        generateQ();

    });
    $('#Win').click(function () {
        $('.lead').removeClass('hide');
        $('#question').removeClass('hide');
        $(this).addClass('hide');
        num = 5;
        $('.lead').text('Time : ' + num);
        trigger = true;
        myTimer();
        generateQ();
     
    });
    $('#lost').click(function () {
        $('.lead').removeClass('hide');
        $('#question').removeClass('hide');
        $(this).addClass('hide');
        num = 5;
        $('.lead').text('Time : ' + num);
        trigger = true;
        myTimer();
        generateQ();
        
    });
    $('#TU').click(function () {
        $('.lead').removeClass('hide');
        $('#question').removeClass('hide');
        $(this).addClass('hide');
        num = 5;
        $('.lead').text('Time : ' + num);
        trigger = true;
        myTimer();
        generateQ();
     
    });


});