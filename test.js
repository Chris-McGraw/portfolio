var $ideTextCursor = $("#ide-text-cursor");

var $ideLnComment = $("#ide-ln-comment");
var $typedComment = $("#typed-comment");
var $ideLnBlank1 = $("#ide-ln-blank-1");
var $ideLnName = $("#ide-ln-name");
var $typedName = $("#typed-name");
var $ideLnBlank2 = $("#ide-ln-blank-2");
var $ideLnProfession = $("#ide-ln-profession");
var $typedProfession = $("#typed-profession");

var ideString_Comment = "// My Portfolio";
var makeArrayThing2 = "const";
var makeArrayThing3 = "name";
var makeArrayThing4 = '"Chris McGraw"';
var makeArrayThing5 = "let";
var makeArrayThing6 = "profession";
var makeArrayThing7 = '"Front End Web Developer"';

var typingTiming = 0;
//var typingInterval = 75;
var typingInterval = 500;





function typeByLetter() {
  var ideArray_Comment = ideString_Comment.split("");
  var secondNewArrayThing = makeArrayThing2.split("");
  var thirdNewArrayThing = makeArrayThing3.split("");
  var fourthNewArrayThing = makeArrayThing4.split("");
  var fifthNewArrayThing = makeArrayThing5.split("");
  var sixthNewArrayThing = makeArrayThing6.split("");
  var seventhNewArrayThing = makeArrayThing7.split("");

  console.log(ideArray_Comment);

  var typeLoopCount = 0;

  ideArray_Comment.forEach(function(i) {
    setTimeout(function() {
      $typedComment.append(i);

      typeLoopCount += 1;
      console.log(typeLoopCount);

      if(typeLoopCount === ideArray_Comment.length) {
        console.log("array finished");
      }
    }, typingTiming);

    typingTiming += typingInterval;
  });

  /* setTimeout(function() {
    $ideTextCursor.hide();
    $ideTextCursor.remove();

    $ideLnBlank1.prepend("<span id='ide-text-cursor'>|</span>");
  }, typingTiming);

  setTimeout(function() {
    $ideTextCursor = $("#ide-text-cursor");
    $ideTextCursor.hide();
    $ideTextCursor.remove();

    $ideLnName.append("<span id='ide-text-cursor'>|</span>");
  }, typingTiming + typingInterval); */



  /* var typingSpeed2 = 900;

  secondNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $typedName.append("<span class='pseudo-var'>" + i + "</span>");
    }, typingSpeed2);

    typingSpeed2 += 50;
  });

  setTimeout(function() {
    $pseudoVar = $(".pseudo-var");
    $pseudoVar.css("color", "#b294bb");
  }, 1150);

  setTimeout(function() {
    $typedName.append(" ");
  }, 1200);




  var typingSpeed3 = 1250;

  thirdNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $typedName.append(i);
    }, typingSpeed3);

    typingSpeed3 += 50;
  });

  setTimeout(function() {
    $typedName.append(" ");
  }, 1450);

  setTimeout(function() {
    $typedName.append("=");
  }, 1500);

  setTimeout(function() {
    $typedName.append(" ");
  }, 1550);



  var typingSpeed4 = 1600;

  fourthNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $typedName.append("<span class='pseudo-value'>" + i + "</span>");
    }, typingSpeed4);

    typingSpeed4 += 50;
  });

  setTimeout(function() {
    $pseudoValue = $(".pseudo-value");
    $pseudoValue.css("color", "#b5bd68");
  }, 2300);

  setTimeout(function() {
    $typedName.append(";");
  }, 2350);

  setTimeout(function() {
    $ideTextCursor = $("#ide-text-cursor");

    $ideTextCursor.hide();
    $ideTextCursor.remove();

    $ideLnBlank2.prepend("<span id='ide-text-cursor'>|</span>");
  }, 2400);

  setTimeout(function() {
    $ideTextCursor = $("#ide-text-cursor");
    $ideTextCursor.hide();
    $ideTextCursor.remove();

    $ideLnProfession.append("<span id='ide-text-cursor'>|</span>");
  }, 2450);


  typingSpeed5 = 2550;

  fifthNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $typedProfession.append("<span class='pseudo-var'>" + i + "</span>");
    }, typingSpeed5);

    typingSpeed5 += 50;
  });

  setTimeout(function() {
    $pseudoVar = $(".pseudo-var");
    $pseudoVar.css("color", "#b294bb");
  }, 2700);

  setTimeout(function() {
    $typedProfession.append(" ");
  }, 2750);

  typingSpeed6 = 2800;

  sixthNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $typedProfession.append(i);
    }, typingSpeed6);

    typingSpeed6 += 50;
  });

  setTimeout(function() {
    $typedProfession.append(" ");
  }, 3300);

  setTimeout(function() {
    $typedProfession.append("=");
  }, 3350);

  setTimeout(function() {
    $typedProfession.append(" ");
  }, 3400);

  typingSpeed7 = 3450;

  seventhNewArrayThing.forEach(function(i) {
    setTimeout(function() {
      $typedProfession.append("<span class='pseudo-value'>" + i + "</span>");
    }, typingSpeed7);

    typingSpeed7 += 50;
  });

  setTimeout(function() {
    $pseudoValue = $(".pseudo-value");
    $pseudoValue.css("color", "#b5bd68");
  }, 4700);

  setTimeout(function() {
    $typedProfession.append(";");
  }, 4750); */

}


$(document).ready(function() {
  setTimeout(function() {
    typeByLetter();
  }, 500);


});
