/* ------------------------- VARIABLE DECLARATIONS ------------------------- */
var windowTop = 0;

/* ~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~ */
var $navbar = $("#navbar");

var $socialLink = $(".social-link");

var $navLogoContainer = $("#nav-logo-container");
var $eye = $(".eye");
var $pupil = $(".pupil");

var $pageJumpLink = $(".page-jump-link");
let currentSection = "";

var $hamburgerMenu = $("#hamburger-menu");
var $hamburgerBarTop = $("#hamburger-bar-top");
var $hamburgerBarMiddle = $("#hamburger-bar-middle");
var $hamburgerBarBottom = $("#hamburger-bar-bottom");

var $dropdownNavbar = $("#dropdown-navbar");
var $dropdownSocialLink = $(".dropdown-social-link");
var $dropdownPageJumpLink = $(".dropdown-page-jump-link");


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
var $aboutSection = $("#about-section");


/* ~~~~~~ PROJECT SECTION ~~~~~~ */
var $projectSection = $("#project-section");
var $projectLink = $(".project-link");


/* ~~~~~~ ARCHIVE SECTION ~~~~~~ */
var $archiveLink = $(".archive-link");
var selectedArchiveLink = "";

var videoLoadLoopTimeout = "";


/* ~~~~~~ CONTACT SECTION ~~~~~~ */
var $contactSection = $("#contact-section");
var $submitButton = $("#submit-button");


/* ~~~~~~~~~~~ FOOTER ~~~~~~~~~~~ */
var $footerLink = $(".footer-link");





/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function progressiveLoadImg(imgID) {
  for (const property in masterImgList) {
    if(imgID === masterImgList[property].id) {
      // console.log(imgID + " loaded");

      if(masterImgList[property].type === "project") {
        $("<img/>").attr("src", masterImgList[property].main).on("load", function() {
          $(this).remove();

          document.getElementById(imgID).src = masterImgList[property].main;
          document.getElementById(imgID).style.filter = "blur(0)";

          setTimeout(function() {
            document.getElementById(imgID).style.filter = "none";
          }, 750);
        });
      }
      else if(masterImgList[property].type === "archive") {
        $("<img/>").attr("src", masterImgList[property].main).on("load", function() {
          $(this).remove();

          document.getElementById(imgID).src = masterImgList[property].main;
          document.getElementById(imgID).parentElement.style.filter = "blur(0)";

          setTimeout(function() {
            document.getElementById(imgID).parentElement.style.filter = "none";
          }, 750);
        });
      }

      masterImgList[property].loaded = true;
      updateImgLoadedArray();
    }
  }
}


function lazyLoadImg(imgID) {
  var rect = document.getElementById(imgID).getBoundingClientRect();

  if(rect.top <= $(window).height() && rect.bottom >= windowTop) {
    progressiveLoadImg(imgID);
  }
}


function scrollToSection(currentSection) {
  let currentSectionText = currentSection.children().text();

  if(currentSectionText === "About") {
    let currentSectionPositionTop = $aboutSection.position().top;
    let currentSectionPadding = Number( $aboutSection.css("padding-top").match(/\d+/)[0] );
    let sectionScrollPosition = currentSectionPositionTop + currentSectionPadding;

    window.scrollTo(0, sectionScrollPosition);
  }
  else if(currentSectionText === "Projects") {
    let currentSectionPositionTop = $projectSection.position().top;
    let currentSectionPadding = Number( $projectSection.css("padding-top").match(/\d+/)[0] );
    let sectionScrollPosition = currentSectionPositionTop + currentSectionPadding;

    window.scrollTo(0, sectionScrollPosition);
  }
  else if(currentSectionText === "Contact") {
    let currentSectionPositionTop = $contactSection.position().top;
    let currentSectionPadding = Number( $contactSection.css("padding-top").match(/\d+/)[0] );
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
    // console.log(totalTypeLoopTime);

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
        // console.log("typing ended");

        $ideTextCursor.css("animation", "cursor-blink-loop 1s infinite");
      }, 500);
    }
  }
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


function videoLoadLoop(selectedArchiveLink, selectedArchiveVideo) {
  if(selectedArchiveVideo.readyState === 4) {
    selectedArchiveLink.children(".archive-image").css("display", "none");
    selectedArchiveLink.children(".archive-vid").css("display", "block");

    selectedArchiveVideo.muted = true;
    selectedArchiveVideo.play();
    selectedArchiveVideo.loop = true;
  }

  else if(selectedArchiveVideo.readyState < 4) {
    videoLoadLoopTimeout = setTimeout(function() {
      videoLoadLoop(selectedArchiveLink, selectedArchiveVideo);
    }, 500);
  }
}


function playArchivePreview(selectedArchiveLink, selectedArchiveVideo) {
  videoLoadLoop(selectedArchiveLink, selectedArchiveVideo);
}


function pauseArchivePreview(selectedArchiveLink, selectedArchiveVideo) {
  selectedArchiveLink.children(".archive-vid").css("display", "none");
  selectedArchiveLink.children(".archive-image").css("display", "block");

  selectedArchiveVideo.pause();
  selectedArchiveVideo.currentTime = 0;
}





/* ---------------------------- EVENT HANDLERS ---------------------------- */
$(document).ready(function() {
  setTimeout(function() {
    ideTypingLoop();
  }, 500);


/* ~~~~~~~~~~~ WINDOW ~~~~~~~~~~~ */
  var debounceTimeout;

  $(window).on("DOMContentLoaded load resize scroll", function() {
    function imgIsLoaded(status) {
      return status === true;
    }

    if(imgLoadedArray.every(imgIsLoaded) === false) {
      clearTimeout(debounceTimeout);

      debounceTimeout = setTimeout(function() {
        windowTop = $navbar.height();
        // console.log(windowTop);

        for (const property in masterImgList) {
          if(masterImgList[property].loaded === false) {
            lazyLoadImg(masterImgList[property].id);
          }
        }
      }, 100);
    }
  });


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

    $socialLink.off("mouseenter");
    $navLogoContainer.off("mouseenter");
    $pageJumpLink.off("mouseenter");
    $dropdownSocialLink.off("mouseenter");
    $dropdownPageJumpLink.off("mouseenter");

    $projectLink.off("mouseenter");

    $archiveLink.off("mouseenter");

    $submitButton.off("mouseenter");

    $footerLink.off("mouseenter");
  });


/* ~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~ */
  $socialLink.on("mouseenter", function() {
    $(this).addClass("nav-element-hovered");
  });

  $socialLink.on("mouseleave", function() {
    $(this).removeClass("nav-element-hovered");
  });

  $socialLink.on("touchstart", function() {
    $(this).addClass("nav-element-hovered");
  });

  $socialLink.on("touchend", function() {
    $(this).removeClass("nav-element-hovered");
  });

// ...

  $navLogoContainer.on("mouseenter", function() {
    clearPupilMovement();
  });

// ...

  $pageJumpLink.on("mouseenter", function() {
    $(this).addClass("nav-element-hovered");
  });

  $pageJumpLink.on("mouseleave", function() {
    $(this).removeClass("nav-element-hovered");
  });

  $pageJumpLink.on("touchstart", function() {
    $(this).addClass("nav-element-hovered");
  });

  $pageJumpLink.on("touchend", function() {
    $(this).removeClass("nav-element-hovered");
  });

  $pageJumpLink.on("click", function(event) {
    event.preventDefault();

    let currentSection = $(this);
    scrollToSection(currentSection);
  });

// ...

  $hamburgerMenu.on("mouseleave", function() {
    $(this).blur();
    $(this).css("outline-width", "initial");
  });

  $hamburgerMenu.on("click", function() {
    $dropdownNavbar.toggleClass("nav-drop-open");

    if($dropdownNavbar.hasClass("nav-drop-open") === true) {
      $dropdownSocialLink.attr("tabindex", 0);

      $dropdownPageJumpLink.attr("tabindex", 0);
    }
    else if($dropdownNavbar.hasClass("nav-drop-open") === false) {
      $dropdownSocialLink.attr("tabindex", -1);

      $dropdownPageJumpLink.attr("tabindex", -1);
    }

    $hamburgerBarTop.toggleClass("rotate-bar-top");
    $hamburgerBarMiddle.toggleClass("hide-bar-middle");
    $hamburgerBarBottom.toggleClass("rotate-bar-bottom");

    $mainBodyContainer.toggleClass("nav-drop-open");
  });

  $hamburgerMenu.on("mousedown", function() {
    $(this).css("outline-width", "0");
  });

  $hamburgerMenu.on("mouseup", function() {
    $(this).blur();
    $(this).css("outline-width", "initial");
  });

// ...

  $dropdownSocialLink.on("mouseenter", function() {
    $(this).children().addClass("nav-element-hovered");
  });

  $dropdownSocialLink.on("mouseleave", function() {
    $(this).children().removeClass("nav-element-hovered");

    $(this).blur();
    $(this).css("outline-width", "initial");
  });

  $dropdownSocialLink.on("touchstart", function() {
    $(this).children().addClass("nav-element-hovered");
  });

  $dropdownSocialLink.on("touchend", function() {
    $(this).children().removeClass("nav-element-hovered");
  });

  $dropdownSocialLink.on("mousedown", function() {
    $(this).css("outline-width", "0");
  });

  $dropdownSocialLink.on("mouseup", function() {
    $(this).blur();
    $(this).css("outline-width", "initial");
  });

// ...

  $dropdownPageJumpLink.on("mouseenter", function() {
    $(this).children().addClass("nav-element-hovered");
  });

  $dropdownPageJumpLink.on("mouseleave", function() {
    $(this).children().removeClass("nav-element-hovered");

    $(this).blur();
    $(this).css("outline-width", "initial");
  });

  $dropdownPageJumpLink.on("touchstart", function() {
    $(this).children().addClass("nav-element-hovered");
  });

  $dropdownPageJumpLink.on("touchend", function() {
    $(this).children().removeClass("nav-element-hovered");
  });

  $dropdownPageJumpLink.on("click", function() {
    event.preventDefault();

    let currentSection = $(this);
    scrollToSection(currentSection);
  });

  $dropdownPageJumpLink.on("mousedown", function() {
    $(this).css("outline-width", "0");
  });

  $dropdownPageJumpLink.on("mouseup", function() {
    $(this).blur();
    $(this).css("outline-width", "initial");
  });


/* ~~~~~~ PROJECT SECTION ~~~~~~ */
  $projectLink.on("mouseenter", function() {
    $(this).addClass("button-hovered");
  });

  $projectLink.on("mouseleave", function() {
    $(this).removeClass("button-hovered");
  });

  $projectLink.on("touchstart", function() {
    $(this).addClass("button-hovered");
  });

  $projectLink.on("touchend", function() {
    $(this).removeClass("button-hovered");
  });


/* ~~~~~~ ARCHIVE SECTION ~~~~~~ */
  $archiveLink.on("mouseenter", function() {
    $(this).addClass("archive-link-hovered");

    selectedArchiveLink = $(this);
    selectedArchiveVideo = document.getElementById( selectedArchiveLink.children(".archive-vid").attr("id") );

    playArchivePreview(selectedArchiveLink, selectedArchiveVideo);
  });

  $archiveLink.on("mouseleave", function() {
    clearTimeout(videoLoadLoopTimeout);

    $(this).removeClass("archive-link-hovered");

    selectedArchiveLink = $(this);
    selectedArchiveVideo = document.getElementById( selectedArchiveLink.children(".archive-vid").attr("id") );

    pauseArchivePreview(selectedArchiveLink, selectedArchiveVideo);
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

    $(this).blur();
    $(this).css("outline-width", "initial");
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

  $submitButton.on("mousedown", function() {
    $(this).css("outline-width", "0");
  });

  $submitButton.on("mouseup", function() {
    $(this).blur();
    $(this).css("outline-width", "initial");
  });


/* ~~~~~~~~~~~ FOOTER ~~~~~~~~~~~ */
  $footerLink.on("mouseenter", function() {
    $(this).addClass("footer-link-hovered");
  });

  $footerLink.on("mouseleave", function() {
    $(this).removeClass("footer-link-hovered");
  });

  $footerLink.on("touchstart", function() {
    $(this).addClass("footer-link-hovered");
  });

  $footerLink.on("touchend", function() {
    $(this).removeClass("footer-link-hovered");
  });


});
