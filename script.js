/* ------------------------- VARIABLE DECLARATIONS ------------------------- */

/* ~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~ */
var $navbar = $("#navbar");
var $navIconInner = $(".nav-icon-inner");

var $navLogoContainer = $("#nav-logo-container");
var $eye = $(".eye");
var $pupil = $(".pupil");

var $navLink = $(".nav-link");
let currentSection = "";

var $hamburgerMenu = $("#hamburger-menu");
var $hamburgerBarTop = $("#hamburger-bar-top");
var $hamburgerBarMiddle = $("#hamburger-bar-middle");
var $hamburgerBarBottom = $("#hamburger-bar-bottom");

var $dropdownNavbar = $("#dropdown-navbar");
var $dropdownNavIcon = $(".dropdown-nav-icon");
var $dropdownNavLink = $(".dropdown-nav-link");


/* ~~~~ MAIN BODY CONTAINER ~~~~ */
var $mainBodyContainer = $("#main-body-container");


/* ~~~~~~ LANDING SECTION ~~~~~~ */
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


/* ~~~~~~~ ABOUT SECTION ~~~~~~~ */
var $aboutContainer = $("#about-container");


/* ~~~~~~ PROJECT SECTION ~~~~~~ */
var $projectContainer = $("#project-container");
var $projectImageVert = $("#project-image-vert");
var $projectImageRecipeBook = $("#project-image-recipe-book");
var $projectButton = $(".project-button");


/* ~~~~~~ ARCHIVE SECTION ~~~~~~ */
var $archiveLink = $(".archive-link");
var selectedArchiveLink = "";

var $archiveImageWeather = $("#archive-image-weather");
var $archiveImagePutting = $("#archive-image-putting");
var $archiveImageCalc = $("#archive-image-calc");


/* ~~~~~~ CONTACT SECTION ~~~~~~ */
var $contactContainer = $("#contact-container");
var $submitButton = $("#submit-button");


/* ~~~~~~~~~~~ FOOTER ~~~~~~~~~~~ */
var $footerIconInner = $(".footer-icon-inner");





/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function progressiveLoadProjectSection() {
  $("<img/>").attr("src", "images/projects/mockup-vert.jpg").on("load", function() {
    $(this).remove();

    $projectImageVert.attr("src", "images/projects/mockup-vert.jpg");
    $projectImageVert.css("filter", "blur(0)");
  });

  $("<img/>").attr("src", "images/projects/mockup-recipe-book.jpg").on("load", function() {
    $(this).remove();

    $projectImageRecipeBook.attr("src", "images/projects/mockup-recipe-book.jpg");
    $projectImageRecipeBook.css("filter", "blur(0)");
  });
}


function progressiveLoadArchiveSection() {
  $("<img/>").attr("src", "images/archive/weather-snap.jpg").on("load", function() {
    $(this).remove();

    $archiveImageWeather.attr("src", "images/archive/weather-snap.jpg");
    $archiveImageWeather.css("filter", "blur(0)");
  });

  $("<img/>").attr("src", "images/archive/dg-putting-snap.jpg").on("load", function() {
    $(this).remove();

    $archiveImagePutting.attr("src", "images/archive/dg-putting-snap.jpg");
    $archiveImagePutting.css("filter", "blur(0)");
  });

  $("<img/>").attr("src", "images/archive/calc-snap.jpg").on("load", function() {
    $(this).remove();

    $archiveImageCalc.attr("src", "images/archive/calc-snap.jpg");
    $archiveImageCalc.css("filter", "blur(0)");
  });
}


function scrollToSection(currentSection) {
  let currentSectionText = currentSection.children().text();

  if(currentSectionText === "About") {
    let currentSectionPositionTop = $aboutContainer.position().top;
    let currentSectionPadding = Number( $aboutContainer.css("padding-top").match(/\d+/)[0] );
    let sectionScrollPosition = currentSectionPositionTop + currentSectionPadding;

    window.scrollTo(0, sectionScrollPosition)
  }
  else if(currentSectionText === "Projects") {
    let currentSectionPositionTop = $projectContainer.position().top;
    let currentSectionPadding = Number( $projectContainer.css("padding-top").match(/\d+/)[0] );
    let sectionScrollPosition = currentSectionPositionTop + currentSectionPadding;

    window.scrollTo(0, sectionScrollPosition);
  }
  else if(currentSectionText === "Contact") {
    let currentSectionPositionTop = $contactContainer.position().top;
    let currentSectionPadding = Number( $contactContainer.css("padding-top").match(/\d+/)[0] );
    let sectionScrollPosition = currentSectionPositionTop + currentSectionPadding;

    window.scrollTo(0, sectionScrollPosition);
  }
}


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


function portraitEyeBlinkLoop() {
  $eye.css("height", "1px");

  setTimeout(function() {
    $eye.css("height", "100%");
  }, 150);

  setTimeout(function() {
    portraitEyeBlinkLoop();
  }, 5000);
}


function clearPupilMovement() {
  $pupil.removeClass("move-pupil-left");
  $pupil.removeClass("move-pupil-right");
  $pupil.removeClass("move-pupil-bottom-left");
  $pupil.removeClass("move-pupil-bottom-mid");
  $pupil.removeClass("move-pupil-bottom-right");
}


function detectPupilMovement(event) {
  if(event.pageY < ( $(window).scrollTop() + $navbar.height() ) && event.pageX < $navLogoContainer.offset().left) {
    clearPupilMovement();

    $pupil.addClass("move-pupil-left");
  }

  else if(event.pageY < ( $(window).scrollTop() + $navbar.height() ) && event.pageX > ( $navLogoContainer.offset().left + $navLogoContainer.width() )) {
    clearPupilMovement();

    $pupil.addClass("move-pupil-right");
  }

  else if(event.pageY > ( $(window).scrollTop() + $navbar.height() ) && event.pageX < $navLogoContainer.offset().left) {
    clearPupilMovement();

    $pupil.addClass("move-pupil-bottom-left");
  }

  else if(event.pageY > ( $(window).scrollTop() + $navbar.height() ) && event.pageX >= $navLogoContainer.offset().left && event.pageX <= ( $navLogoContainer.offset().left + $navLogoContainer.width() )) {
    clearPupilMovement();

    $pupil.addClass("move-pupil-bottom-mid");
  }

  else if(event.pageY > ( $(window).scrollTop() + $navbar.height() ) && event.pageX > ( $navLogoContainer.offset().left + $navLogoContainer.width() )) {
    clearPupilMovement();

    $pupil.addClass("move-pupil-bottom-right");
  }
}


function playArchivePreview(selectedArchiveLink) {
  if(selectedArchiveLink.attr("id") === "archive-link-1") {
    selectedArchiveLink.children(".archive-image").css("display", "none");
    selectedArchiveLink.children(".archive-vid").css("display", "block");

    document.getElementById("archive-vid-1").play();
    document.getElementById("archive-vid-1").loop = true;
  }

  else if(selectedArchiveLink.attr("id") === "archive-link-2") {
    selectedArchiveLink.children(".archive-image").css("display", "none");
    selectedArchiveLink.children(".archive-vid").css("display", "block");

    document.getElementById("archive-vid-2").play();
    document.getElementById("archive-vid-2").loop = true;
  }

  else if(selectedArchiveLink.attr("id") === "archive-link-3") {
    selectedArchiveLink.children(".archive-image").css("display", "none");
    selectedArchiveLink.children(".archive-vid").css("display", "block");

    document.getElementById("archive-vid-3").play();
    document.getElementById("archive-vid-3").loop = true;
  }
}


function pauseArchivePreview(selectedArchiveLink) {
  if(selectedArchiveLink.attr("id") === "archive-link-1") {
    selectedArchiveLink.children(".archive-vid").css("display", "none");
    selectedArchiveLink.children(".archive-image").css("display", "block");

    document.getElementById("archive-vid-1").pause();
    document.getElementById("archive-vid-1").currentTime = 0;
  }

  else if(selectedArchiveLink.attr("id") === "archive-link-2") {
    selectedArchiveLink.children(".archive-vid").css("display", "none");
    selectedArchiveLink.children(".archive-image").css("display", "block");

    document.getElementById("archive-vid-2").pause();
    document.getElementById("archive-vid-2").currentTime = 0;
  }

  else if(selectedArchiveLink.attr("id") === "archive-link-3") {
    selectedArchiveLink.children(".archive-vid").css("display", "none");
    selectedArchiveLink.children(".archive-image").css("display", "block");

    document.getElementById("archive-vid-3").pause();
    document.getElementById("archive-vid-3").currentTime = 0;
  }
}





/* ---------------------------- EVENT HANDLERS ---------------------------- */
$(document).ready(function() {
  progressiveLoadProjectSection();
  progressiveLoadArchiveSection();

// ...

  setTimeout(function() {
    ideTypingLoop();
  }, 500);

  setTimeout(function() {
    //portraitEyeBlinkLoop();
  }, 2500);


/* ~~~~~~~~~~ DOCUMENT ~~~~~~~~~~ */
  $(document).mousemove(function(event) {
    detectPupilMovement(event);
  });

  $(document).on("mouseleave", function() {
    clearPupilMovement();
  });


/* ~~~~~~~~~~~~ BODY ~~~~~~~~~~~~ */
  $("body *").on("touchstart", function() {
    $(document).off("mousemove");

    $navIconInner.off("mouseenter");
    $navLogoContainer.off("mouseenter");
    $navLink.off("mouseenter");
    $dropdownNavIcon.off("mouseenter");
    $dropdownNavLink.off("mouseenter");

    $projectButton.off("mouseenter");

    $archiveLink.off("mouseenter");

    $submitButton.off("mouseenter");

    $footerIconInner.off("mouseenter");
  });


/* ~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~ */
  $navIconInner.on("mouseenter", function() {
    $(this).addClass("nav-element-hovered");
  });

  $navIconInner.on("mouseleave", function() {
    $(this).removeClass("nav-element-hovered");
  });

  $navIconInner.on("touchstart", function() {
    $(this).addClass("nav-element-hovered");
  });

  $navIconInner.on("touchend", function() {
    $(this).removeClass("nav-element-hovered");
  });

// ...

  $navLogoContainer.on("mouseenter", function() {
    clearPupilMovement();
  });

// ...

  $navLink.on("mouseenter", function() {
    $(this).addClass("nav-element-hovered");
  });

  $navLink.on("mouseleave", function() {
    $(this).removeClass("nav-element-hovered");
  });

  $navLink.on("touchstart", function() {
    $(this).addClass("nav-element-hovered");
  });

  $navLink.on("touchend", function() {
    $(this).removeClass("nav-element-hovered");
  });

  $navLink.on("click", function() {
    let currentSection = $(this);
    scrollToSection(currentSection);
  });

// ...

  $hamburgerMenu.on("click", function() {
    $dropdownNavbar.toggleClass("nav-drop-open");

    $hamburgerBarTop.toggleClass("rotate-bar-top");
    $hamburgerBarMiddle.toggleClass("hide-bar-middle");
    $hamburgerBarBottom.toggleClass("rotate-bar-bottom");

    $mainBodyContainer.toggleClass("nav-drop-open");
  });

// ...

  $dropdownNavIcon.on("mouseenter", function() {
    $(this).children().addClass("nav-element-hovered");
  });

  $dropdownNavIcon.on("mouseleave", function() {
    $(this).children().removeClass("nav-element-hovered");
  });

  $dropdownNavIcon.on("touchstart", function() {
    $(this).children().addClass("nav-element-hovered");
  });

  $dropdownNavIcon.on("touchend", function() {
    $(this).children().removeClass("nav-element-hovered");
  });

// ...

  $dropdownNavLink.on("mouseenter", function() {
    $(this).children().addClass("nav-element-hovered");
  });

  $dropdownNavLink.on("mouseleave", function() {
    $(this).children().removeClass("nav-element-hovered");
  });

  $dropdownNavLink.on("touchstart", function() {
    $(this).children().addClass("nav-element-hovered");
  });

  $dropdownNavLink.on("touchend", function() {
    $(this).children().removeClass("nav-element-hovered");
  });

  $dropdownNavLink.on("click", function() {
    let currentSection = $(this);
    scrollToSection(currentSection);
  });


/* ~~~~~~ PROJECT SECTION ~~~~~~ */
  $projectButton.on("mouseenter", function() {
    $(this).addClass("button-hovered");
  });

  $projectButton.on("mouseleave", function() {
    $(this).removeClass("button-hovered");
  });

  $projectButton.on("touchstart", function() {
    $(this).addClass("button-hovered");
  });

  $projectButton.on("touchend", function() {
    $(this).removeClass("button-hovered");
  });


/* ~~~~~~ ARCHIVE SECTION ~~~~~~ */
  $archiveLink.on("mouseenter", function() {
    $(this).addClass("archive-link-hovered");

    selectedArchiveLink = $(this);
    playArchivePreview(selectedArchiveLink);
  });

  $archiveLink.on("mouseleave", function() {
    $(this).removeClass("archive-link-hovered");

    selectedArchiveLink = $(this);
    pauseArchivePreview(selectedArchiveLink);
  });

  $archiveLink.on("touchstart", function() {
    $(this).addClass("archive-link-hovered");
  });

  $archiveLink.on("touchend", function() {
    $(this).removeClass("archive-link-hovered");
  });


/* ~~~~~~ CONTACT SECTION ~~~~~~ */
  $submitButton.on("mouseenter", function() {
    $(this).addClass("button-hovered");
  });

  $submitButton.on("mouseleave", function() {
    $(this).removeClass("button-hovered");
  });

  $submitButton.on("touchstart", function() {
    $(this).addClass("button-hovered");
  });

  $submitButton.on("touchend", function() {
    $(this).removeClass("button-hovered");
  });

  /* $submitButton.on("click", function(event) {
    event.preventDefault();
  }); */


/* ~~~~~~~~~~~ FOOTER ~~~~~~~~~~~ */
  $footerIconInner.on("mouseenter", function() {
    $(this).addClass("footer-icon-hovered");
  });

  $footerIconInner.on("mouseleave", function() {
    $(this).removeClass("footer-icon-hovered");
  });

  $footerIconInner.on("touchstart", function() {
    $(this).addClass("footer-icon-hovered");
  });

  $footerIconInner.on("touchend", function() {
    $(this).removeClass("footer-icon-hovered");
  });


});
