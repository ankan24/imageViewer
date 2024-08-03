let body = document.querySelector("body");
let input = document.getElementById("inpt-url");
let add = document.getElementById("add-btn");
let image = document.getElementById("image");
let documents = document.getElementById("documents");

documents.innerText =
  "Please enter the Image URL and click on add button , then press 'P' for previous image, 'N' for next image, 'C' for clear current image, 'D' for delete all images.";

image.setAttribute("width", "300px");
image.setAttribute("height", "300px");

let arrImg = [];
let index = -1;

add.addEventListener("click", () => {
  console.log("Add button clicked");
  let url = input.value;
  console.log(url);
  image.setAttribute("src", url);
  index++;
  arrImg[index] = url;
  console.log(arrImg);
});

body.addEventListener("keypress", (event) => {
  console.log(event.key);
  if (event.key === "p" || event.key === "P") {
    gotoPrevious();
  }
  if (event.key === "n" || event.key === "N") {
    gotoNext();
  }
  if (event.key === "c" || event.key === "C") {
    clearImage();
  }
  if (event.key === "d" || event.key === "D") {
    deleteAllImage();
  }
});

function gotoPrevious() {
  if (index > 0) {
    index--;
    image.setAttribute("src", arrImg[index]);
  } else {
    index = arrImg.length - 1;
    image.setAttribute("src", arrImg[index]);
  }
}

function gotoNext() {
  if (index < arrImg.length - 1) {
    index++;
    image.setAttribute("src", arrImg[index]);
  } else {
    index = 0;
    image.setAttribute("src", arrImg[index]);
  }
}
function clearImage() {
  arrImg.splice(index, 1);
  index--;
  image.setAttribute("src", arrImg[index]);
}
function deleteAllImage() {
  arrImg.length = 0;
  index = -1;
  image.setAttribute("src", "");
}
