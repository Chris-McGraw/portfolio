var $blankTop = $("#blank-top");
var $blankTop2 = $("#blank-top-2");
var $blankTop3 = $("#blank-top-3");

var $pointerBlink = $("#pointer-blink");
var $portComment = $("#port-comment");
var $portBlank1 = $("#port-blank-1");
var $portName = $("#port-name");
var $portBlank2 = $("#port-blank-2");
var $portProfession = $("#port-profession");

var makeArrayThing = "// My Portfolio";
var makeArrayThing2 = "const";
var makeArrayThing3 = "name";
var makeArrayThing4 = '"Chris McGraw"';
var makeArrayThing5 = "let";
var makeArrayThing6 = "profession";
var makeArrayThing7 = '"Front End Web Developer"';

var typingSpeed = 0;





function typeByLetter() {
  var newArrayThing = makeArrayThing.split("");
  var secondNewArrayThing = makeArrayThing2.split("");
  var thirdNewArrayThing = makeArrayThing3.split("");
  var fourthNewArrayThing = makeArrayThing4.split("");
  var fifthNewArrayThing = makeArrayThing5.split("");
  var sixthNewArrayThing = makeArrayThing6.split("");
  var seventhNewArrayThing = makeArrayThing7.split("");

  console.log(newArrayThing);

  newArrayThing.forEach(function(i) {
    setTimeout(function() {
      $blankTop.append(i);
    }, typingSpeed);

    typingSpeed += 50;
  });

  setTimeout(function() {
    $pointerBlink.hide();
    $pointerBlink.remove();

    $portBlank1.prepend("<span id='pointer-blink'>|</span>");
  }, 750);

  setTimeout(function() {
    $pointerBlink = $("#pointer-blink");
    $pointerBlink.hide();
    $pointerBlink.remove();

    $portName.append("<span id='pointer-blink'>|</span>");
  }, 800);



  var typingSpeed2 = 900;

  secondNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $blankTop2.append("<span class='pseudo-var'>" + i + "</span>");
    }, typingSpeed2);

    typingSpeed2 += 50;
  });

  setTimeout(function() {
    $pseudoVar = $(".pseudo-var");
    $pseudoVar.css("color", "#b294bb");
  }, 1150);

  setTimeout(function() {
    $blankTop2.append(" ");
  }, 1200);




  var typingSpeed3 = 1250;

  thirdNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $blankTop2.append(i);
    }, typingSpeed3);

    typingSpeed3 += 50;
  });

  setTimeout(function() {
    $blankTop2.append(" ");
  }, 1450);

  setTimeout(function() {
    $blankTop2.append("=");
  }, 1500);

  setTimeout(function() {
    $blankTop2.append(" ");
  }, 1550);



  var typingSpeed4 = 1600;

  fourthNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $blankTop2.append("<span class='pseudo-value'>" + i + "</span>");
    }, typingSpeed4);

    typingSpeed4 += 50;
  });

  setTimeout(function() {
    $pseudoValue = $(".pseudo-value");
    $pseudoValue.css("color", "#b5bd68");
  }, 2300);

  setTimeout(function() {
    $blankTop2.append(";");
  }, 2350);

  setTimeout(function() {
    $pointerBlink = $("#pointer-blink");

    $pointerBlink.hide();
    $pointerBlink.remove();

    $portBlank2.prepend("<span id='pointer-blink'>|</span>");
  }, 2400);

  setTimeout(function() {
    $pointerBlink = $("#pointer-blink");
    $pointerBlink.hide();
    $pointerBlink.remove();

    $portProfession.append("<span id='pointer-blink'>|</span>");
  }, 2450);


  typingSpeed5 = 2550;

  fifthNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $blankTop3.append("<span class='pseudo-var'>" + i + "</span>");
    }, typingSpeed5);

    typingSpeed5 += 50;
  });

  setTimeout(function() {
    $pseudoVar = $(".pseudo-var");
    $pseudoVar.css("color", "#b294bb");
  }, 2700);

  setTimeout(function() {
    $blankTop3.append(" ");
  }, 2750);

  typingSpeed6 = 2800;

  sixthNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $blankTop3.append(i);
    }, typingSpeed6);

    typingSpeed6 += 50;
  });

  setTimeout(function() {
    $blankTop3.append(" ");
  }, 3300);

  setTimeout(function() {
    $blankTop3.append("=");
  }, 3350);

  setTimeout(function() {
    $blankTop3.append(" ");
  }, 3400);

  typingSpeed7 = 3450;

  seventhNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $blankTop3.append("<span class='pseudo-value'>" + i + "</span>");
    }, typingSpeed7);

    typingSpeed7 += 50;
  });

  setTimeout(function() {
    $pseudoValue = $(".pseudo-value");
    $pseudoValue.css("color", "#b5bd68");
  }, 4700);

  setTimeout(function() {
    $blankTop3.append(";");
  }, 4750);

}


$(document).ready(function() {
  setTimeout(function() {
    typeByLetter();
  }, 500);


});
