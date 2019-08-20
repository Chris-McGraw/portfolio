/* ------------------------- VARIABLE DECLARATIONS ------------------------- */
var $ideTextCursor = $("#ide-text-cursor");
var $ideLnComment = $("#ide-ln-comment");
var $typedComment = $("#typed-comment");
var $ideLnBlank1 = $("#ide-ln-blank-1");
var $ideLnName = $("#ide-ln-name");
var $typedName = $("#typed-name");
var $ideLnBlank2 = $("#ide-ln-blank-2");
var $ideLnProfession = $("#ide-ln-profession");
var $typedProfession = $("#typed-profession");

let localTypeLoopTime = 0;
let totalTypeLoopTime = 0;
const typeTiming = 75;
let typeLoopCount = -1;
let blankLineDelay = false;

var $eyeGridLeft = $("#eye-grid-left");
var $navLogoContainer = $("#nav-logo-container");
var $eyeGridRight = $("#eye-grid-right");

var $navbar = $("#navbar");
var $navIconContainer = $("#nav-icon-container");
var $navLinkList = $("#nav-link-list");

var $iris = $(".iris");

var $submitButton = $("#submit-button");





/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
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


function clearPupilMovement() {
  $iris.removeClass("move-iris-left");
  $iris.removeClass("move-iris-right");
  $iris.removeClass("move-iris-bottom-left");
  $iris.removeClass("move-iris-bottom-mid");
  $iris.removeClass("move-iris-bottom-right");
}


function detectBottomPupilMovement(event) {
  if(event.pageY > ( $(window).scrollTop() + $navbar.height() ) && event.pageX < $navLogoContainer.offset().left) {
    clearPupilMovement();

    $iris.addClass("move-iris-bottom-left");
  }

  else if(event.pageY > ( $(window).scrollTop() + $navbar.height() ) && event.pageX >= $navLogoContainer.offset().left && event.pageX <= ( $navLogoContainer.offset().left + $navLogoContainer.width() )) {
    clearPupilMovement();

    $iris.addClass("move-iris-bottom-mid");
  }

  else if(event.pageY > ( $(window).scrollTop() + $navbar.height() ) && event.pageX > ( $navLogoContainer.offset().left + $navLogoContainer.width() )) {
    clearPupilMovement();

    $iris.addClass("move-iris-bottom-right");
  }
}





/* ---------------------------- EVENT HANDLERS ---------------------------- */
$(document).ready(function() {
  setTimeout(function() {
    ideTypingLoop();
  }, 500);



  $eyeGridLeft.on("mouseenter", function() {
    clearPupilMovement();

    $iris.addClass("move-iris-left");
  });

  $navIconContainer.on("mouseenter", function() {
    clearPupilMovement();

    $iris.addClass("move-iris-left");
  });

  $navLogoContainer.on("mouseenter", function() {
    clearPupilMovement();
  });

  $eyeGridRight.on("mouseenter", function() {
    clearPupilMovement();

    $iris.addClass("move-iris-right");
  });

  $navLinkList.on("mouseenter", function() {
    clearPupilMovement();

    $iris.addClass("move-iris-right");
  });



  $(document).on("mouseleave", function() {
    clearPupilMovement();
  });



  $(document).mousemove(function(event) {
    //console.log(event.pageX);

    detectBottomPupilMovement(event);
  });

  /* console.log("nav height: " + ( $(window).scrollTop() + $navbar.height() ));
  console.log("logo-left: " + $navLogoContainer.offset().left);
  console.log("logo-right: " + ( $navLogoContainer.offset().left + $navLogoContainer.width() )); */



  $submitButton.on("click", function(event) {
    event.preventDefault();
  });


});
