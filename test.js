var $ideTextCursor = $("#ide-text-cursor");

var $ideLnComment = $("#ide-ln-comment");
var $typedComment = $("#typed-comment");
var $ideLnBlank1 = $("#ide-ln-blank-1");
var $ideLnName = $("#ide-ln-name");
var $typedName = $("#typed-name");
var $ideLnBlank2 = $("#ide-ln-blank-2");
var $ideLnProfession = $("#ide-ln-profession");
var $typedProfession = $("#typed-profession");

/* var makeArrayThing = "// My Portfolio";
var makeArrayThing2 = "const";
var makeArrayThing3 = "name";
var makeArrayThing4 = '"Chris McGraw"';
var makeArrayThing5 = "let";
var makeArrayThing6 = "profession";
var makeArrayThing7 = '"Front End Web Developer"';

var typingSpeed = 0; */


let localTypeLoopTime = 0;
let totalTypeLoopTime = 0;

const typeTiming = 75;
let typeLoopCount = -1;

let blankLineDelay = false;


function ideTypeByLetter(currentLine) {
  if(blankLineDelay === false) {
    localTypeLoopTime = 0;
  }
  else if(blankLineDelay === true) {
    localTypeLoopTime = typeTiming;
    totalTypeLoopTime += typeTiming;
  }

  currentLine.words.forEach(function(i) {
    let newWordArray = i.split("");

    newWordArray.forEach(function(v) {
      localTypeLoopTime += typeTiming;
      totalTypeLoopTime += typeTiming;

      setTimeout(function() {
        if(currentLine === ideLineComment) {
          $typedComment.append(v);
        }

        else if(currentLine === ideLineNameConst) {
          $typedName.append("<span class='pseudo-var'>" + v + "</span>");
        }
        else if(currentLine === ideLineName) {
          $typedName.append(v);
        }
        else if(currentLine === ideLineNameValue) {
          $typedName.append("<span class='pseudo-value'>" + v + "</span>");
        }
        else if(currentLine === ideLineNameSemi) {
          $typedName.append(v);
        }

        else if(currentLine === ideLineProfessionConst) {
          $typedProfession.append("<span class='pseudo-var'>" + v + "</span>");
        }
        else if(currentLine === ideLineProfession) {
          $typedProfession.append(v);
        }
        else if(currentLine === ideLineProfessionValue) {
          $typedProfession.append("<span class='pseudo-value'>" + v + "</span>");
        }
        else if(currentLine === ideLineProfessionSemi) {
          $typedProfession.append(v);
        }
      }, localTypeLoopTime);
    });
  });

  setTimeout(function() {
    console.log(totalTypeLoopTime);

    if(currentLine.class === "pseudoVar") {
      $pseudoVar = $(".pseudo-var");
      $pseudoVar.css("color", "#b294bb");
    }
    if(currentLine.class === "pseudoValue") {
      $pseudoValue = $(".pseudo-value");
      $pseudoValue.css("color", "#b5bd68");
    }

    if(currentLine === ideLineComment) {
      ideSkipLine($ideLnBlank1);

      blankLineDelay = true;
    }
    else if(currentLine === ideLineNameSemi) {
      ideSkipLine($ideLnBlank2);

      blankLineDelay = true;
    }
    else if(currentLine !== ideLineComment || currentLine !== ideLineNameSemi) {
      blankLineDelay = false;
    }
  }, localTypeLoopTime);
}


function ideSkipLine(currentLineBlank) {
  $ideTextCursor.hide();
  $ideTextCursor.remove();

  if(currentLineBlank === $ideLnBlank1) {
    $ideLnBlank1.prepend("<span id='ide-text-cursor'>|</span>");
  }
  else if(currentLineBlank === $ideLnBlank2) {
    $ideLnBlank2.prepend("<span id='ide-text-cursor'>|</span>");
  }

  setTimeout(function() {
    $ideTextCursor = $("#ide-text-cursor");
    $ideTextCursor.hide();
    $ideTextCursor.remove();

    if(currentLineBlank === $ideLnBlank1) {
      $ideLnName.append("<span id='ide-text-cursor'>|</span>");
    }
    else if(currentLineBlank === $ideLnBlank2) {
      $ideLnProfession.append("<span id='ide-text-cursor'>|</span>");
    }

    $ideTextCursor = $("#ide-text-cursor");
  }, typeTiming);
}


function ideTypingLoop() {
  if(typeLoopCount < ideCombinedArray.length) {
    typeLoopCount++;

    if(typeLoopCount !== ideCombinedArray.length) {
      setTimeout(function() {
        ideTypeByLetter(ideCombinedArray[typeLoopCount]);

        ideTypingLoop();
      }, localTypeLoopTime);
    }
    else {
      setTimeout(function() {
        console.log("typing ended");

        //ideCursorBlinkLoop();
      }, 500);
    }
  }
}


function ideCursorBlinkLoop() {
  $ideTextCursor.css("opacity", "0");

  setTimeout(function() {
    $ideTextCursor.css("opacity", "1");
  }, 500);

  setTimeout(function() {
    ideCursorBlinkLoop();
  }, (500 * 2));
}



/* function typeByLetter() {
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
      $typedComment.append(i);
    }, typingSpeed);

    typingSpeed += 50;
  });

  setTimeout(function() {
    $ideTextCursor.hide();
    $ideTextCursor.remove();

    $ideLnBlank1.prepend("<span id='ide-text-cursor'>|</span>");
  }, 750);

  setTimeout(function() {
    $ideTextCursor = $("#ide-text-cursor");
    $ideTextCursor.hide();
    $ideTextCursor.remove();

    $ideLnName.append("<span id='ide-text-cursor'>|</span>");
  }, 800);



  var typingSpeed2 = 900;

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
  }, 4750);

} */


$(document).ready(function() {
  setTimeout(function() {
    //typeByLetter();

    ideTypingLoop();
  }, 500);


});
