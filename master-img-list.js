const masterImgList = {
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
  vertProject: {
    id: "project-image-vert",
    type: "project",
    tiny: "images/projects/mockup-vert-tiny.jpg",
    main: "images/projects/mockup-vert.jpg",
    loaded: false
  },
  weatherArchive: {
    id: "archive-image-weather",
    type: "archive",
    tiny: "images/archive/weather-snap-tiny.jpg",
    main: "images/archive/weather-snap.jpg",
    loaded: false
  },
  dgPuttingArchive: {
    id: "archive-image-dg-putting",
    type: "archive",
    tiny: "images/archive/dg-putting-snap-tiny.jpg",
    main: "images/archive/dg-putting-snap.jpg",
    loaded: false
  },
  calcArchive: {
    id: "archive-image-calc",
    type: "archive",
    tiny: "images/archive/calc-snap-tiny.jpg",
    main: "images/archive/calc-snap.jpg",
    loaded: false
  },
  svgLineArchive: {
    id: "archive-image-svg-line",
    type: "archive",
    tiny: "images/archive/svg-line-anim-snap-tiny.jpg",
    main: "images/archive/svg-line-anim-snap.jpg",
    loaded: false
  }
}

// ---

let imgLoadedArray = [];

function updateImgLoadedArray() {
  imgLoadedArray = [];

  for (const property in masterImgList) {
    imgLoadedArray.push(masterImgList[property].loaded);
  }
};

updateImgLoadedArray();
// console.log(imgLoadedArray);
