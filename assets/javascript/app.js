$(document).ready(function() {
  var score = 0;
  var timer = 20;
  var currentQuestion = 0;
  var questions = [
    {
      title: "What is the name of the rescue ship in 'Event Horizon'?",
      answers: [
        "Event Horizon",
        "Proxima Centauri",
        "Lewis and Clark",
        "Slave II"
      ],
      correct: 2
    },
    {
      title:
        "The movie, Moon, opens with the line, 'Where are we now?' This is also the name of a song by which artist?",
      answers: ["David Bowie", "Elton John", "Prince", "Tom Waits"],
      correct: 0
    },
    {
      title:
        "This was the first documentary style film to be nominated for the Best Picture Oscar",
      answers: [
        "Borat",
        "District 9",
        "Cloverfield",
        "The Blair Witch Project"
      ],
      correct: 2
    },
    {
      title:
        "In Ex Machina, Ava is a female robot. What other film has a robot named Ava",
      answers: ["Chapie", "The Bicentennial Man", "Automata", "The Machine"],
      correct: 3
    },
    {
      title:
        "In the film 'Interstellar', on the water planet, the music in the background has a clear ticking noise. These ticks occur every _____ seconds. Every click is one day on Earth.",
      answers: ["1.75", "1.00", "1.25", "1.30"],
      correct: 2
    }
  ];


  // display the proper pages when clicked

  $(".start a").click(function(event) {
    event.preventDefault();
    $(".start").hide();
    $(".quiz").show();
    showQuestion();
    countDownTimer();
  });

  $(".quiz ul").on("click", "li", function() {
    $(".selected").removeClass("selected");
    $(this).toggleClass("selected");
  });

  $(".quiz a").click(function(e) {
    e.preventDefault();
    if ($("li.selected").length) {
      var guess = $("li.selected").attr("id");
      // console.log(guess);
      checkAnswer(guess);
    } else {
      alert("You didn't select an answer");
    }

  });

  $(".result a").click(function(e) {
    e.preventDefault();
    restartQuiz();
  });


  // timer functions live here

  function countDownTimer() {
    setInterval(decrement, 1000);
  }


  function decrement () {
    timer--;
    $("#timer").html("<h3>" + timer + "</h3>");
    if (timer == 0 ) {
      showResults();
    }
  }



  //functions for question changes, results, checking user answer, and restart

  function showQuestion() {
    var question = questions[currentQuestion];
    $(".quiz h3").text(question.title);
    $(".quiz ul").text("");
    for (var i = 0; i < question.answers.length; i++) {
      // console.log(question.answers);
      $(".quiz ul").append(
        "<li id=' " + i + "' type='radio'>" + question.answers[i] + "</li>"
      );
      // console.log($(`#${i}`).val());
    }
  }

  function checkAnswer(guess) {
    // var question = questions[currentQuestion];
    // console.log(questions[currentQuestion].correct);
    // console.log(guess);
    if (questions[currentQuestion].correct == guess) {
      score++;
    //  console.log("correct");
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      showResults();
    } else {
      showQuestion();
    }
  }

  function showResults() {
    $(".quiz").hide();
    $(".result").show();
    $(".result p").text("You scored " + score + " out of " + questions.length);
  }

  function restartQuiz() {
    $(".result").hide();
    $(".start").show();
    score = 0;
    currentQuestion = 0;
  }

 


});
