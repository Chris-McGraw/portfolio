/* ------------------------- VARIABLE DECLARATIONS ------------------------- */
const masterImgList = {
  drumMachineProject: {
    id: "project-image-drum-machine",
    type: "project",
    tiny: "images/projects/mockup-drum-machine-tiny.jpg",
    main: "images/projects/mockup-drum-machine.jpg",
    loaded: false
  },
  dropDateProject: {
    id: "project-image-drop-date",
    type: "project",
    tiny: "images/projects/mockup-drop-date-tiny.jpg",
    main: "images/projects/mockup-drop-date.jpg",
    loaded: false
  },
  recipeBookProject: {
    id: "project-image-recipe-book",
    type: "project",
    tiny: "images/projects/mockup-recipe-book-tiny.jpg",
    main: "images/projects/mockup-recipe-book.jpg",
    loaded: false
  },
  ShortlyProject: {
    id: "project-image-shortly",
    type: "project",
    tiny: "images/projects/mockup-shortly-tiny.jpg",
    main: "images/projects/mockup-shortly.jpg",
    loaded: false
  },
  vertArchive: {
    id: "archive-image-vert",
    type: "archive",
    tiny: "images/archive/vert-snap-tiny.jpg",
    main: "images/archive/vert-snap.jpg",
    loaded: false,
    vidID: "archive-vid-vert",
    vidSrc: "videos/vert-preview.mp4",
    href: "https://github.com/Chris-McGraw/e-commerce",
    linkAria: "Vert GitHub link",
    imgAlt: "Vert archive image"
  },
  dgPuttingArchive: {
    id: "archive-image-dg-putting",
    type: "archive",
    tiny: "images/archive/dg-putting-snap-tiny.jpg",
    main: "images/archive/dg-putting-snap.jpg",
    loaded: false,
    vidID: "archive-vid-dg-putting",
    vidSrc: "videos/dg-putting-preview.mp4",
    href: "https://github.com/Chris-McGraw/dg-putting-game",
    linkAria: "Disc Golf Putting Game GitHub link",
    imgAlt: "Disc Golf Putting Game archive image"
  },
  weatherArchive: {
    id: "archive-image-weather",
    type: "archive",
    tiny: "images/archive/weather-snap-tiny.jpg",
    main: "images/archive/weather-snap.jpg",
    loaded: false,
    vidID: "archive-vid-weather",
    vidSrc: "videos/weather-preview.mp4",
    href: "https://github.com/Chris-McGraw/weather-app-v2",
    linkAria: "Weather App GitHub link",
    imgAlt: "Weather App archive image"
  },
  svgLineArchive: {
    id: "archive-image-svg-line",
    type: "archive",
    tiny: "images/archive/svg-line-anim-snap-tiny.jpg",
    main: "images/archive/svg-line-anim-snap.jpg",
    loaded: false,
    vidID: "archive-vid-svg-line",
    vidSrc: "videos/svg-line-anim-preview.mp4",
    href: "https://github.com/Chris-McGraw/svg-line-animation",
    linkAria: "SVG Line Animation GitHub link",
    imgAlt: "SVG Line Animation archive image"
  },
  ipcArchive: {
    id: "archive-image-ipc",
    type: "archive",
    tiny: "images/archive/ipc-snap-tiny.jpg",
    main: "images/archive/ipc-snap.jpg",
    loaded: false,
    vidSrc: "videos/ipc-preview.mp4",
    vidID: "archive-vid-ipc",
    vidSrc: "videos/ipc-preview.mp4",
    href: "https://github.com/Chris-McGraw/interactive-pricing-component",
    linkAria: "Interactive Pricing Component GitHub link",
    imgAlt: "Interactive Pricing Component archive image"
  },
  calcArchive: {
    id: "archive-image-calc",
    type: "archive",
    tiny: "images/archive/calc-snap-tiny.jpg",
    main: "images/archive/calc-snap.jpg",
    loaded: false,
    vidID: "archive-vid-calc",
    vidSrc: "videos/calc-preview.mp4",
    href: "https://github.com/Chris-McGraw/basic-javascript-calculator",
    linkAria: "Javascript Calculator GitHub link",
    imgAlt: "Javascript Calculator archive image"
  },
  // dgGameProtoArchive: {
  //   id: "archive-image-dg-game-proto",
  //   type: "archive",
  //   tiny: "images/archive/dg-game-proto-snap-tiny.jpg",
  //   main: "images/archive/dg-game-proto-snap.jpg",
  //   loaded: false,
  //   vidID: "archive-vid-dg-game-proto",
  //   vidSrc: "videos/dg-game-proto-preview.mp4",
  //   href: "https://github.com/Chris-McGraw/dg-game-proto",
  //   linkAria: "Disc Golf Game Prototype GitHub link",
  //   imgAlt: "Disc Golf Game Prototype archive image"
  // },
}

let imgLoadedArray = [];
const $archiveLinkList = $("#archive-link-list");





/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function updateImgLoadedArray() {
  imgLoadedArray = [];

  for (const property in masterImgList) {
    imgLoadedArray.push(masterImgList[property].loaded);
  }
};


function populateArchiveLinkList() {
  for (const property in masterImgList) {
    if(masterImgList[property].type === "archive") {
      createArchiveLink(masterImgList[property]);
    }
  }
}


function createArchiveLink(prop) {
  var listItem = document.createElement("LI");
  listItem.classList.add("archive-thumbnail");

  var liLink = document.createElement("A");
  liLink.classList.add("archive-link");
  liLink.href = prop.href;
  liLink.setAttribute("aria-label", prop.linkAria);
  liLink.setAttribute("target", "_blank");

  var liImg = document.createElement("IMG");
  liImg.setAttribute("id", prop.id);
  liImg.classList.add("archive-image");
  liImg.src = prop.tiny;
  liImg.setAttribute("alt", prop.imgAlt);
  liImg.setAttribute("draggable", "false");

  var liVideo = document.createElement("VIDEO");
  liVideo.setAttribute("id", prop.vidID);
  liVideo.classList.add("archive-vid");
  liVideo.setAttribute("muted", "muted");
  liVideo.setAttribute("draggable", "false");

  var liVideoSrc = document.createElement("SOURCE");
  liVideoSrc.src = prop.vidSrc;
  liVideoSrc.setAttribute("type", "video/mp4");

  liVideo.append(liVideoSrc);
  liLink.append(liVideo);
  liLink.append(liImg);
  listItem.append(liLink);

  $archiveLinkList.append(listItem);
}





/* ---------------------------- EVENT HANDLERS ---------------------------- */
updateImgLoadedArray();
// console.log(imgLoadedArray);

populateArchiveLinkList();
