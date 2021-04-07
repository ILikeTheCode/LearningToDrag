"use strict";

const [dragger] = document.getElementsByClassName("dragger");
const [dropzone] = document.getElementsByClassName("dropzone");
const sandbox = document.querySelector(".sandbox");
let currentColor, dropBorder;

function currentdragHandler(ev) {
  console.log("Event!");
}

dragger.addEventListener("dragend", function (ev) {
  console.log("Drag ended");
});

dropzone.addEventListener("dragleave", function (ev) {
  ev.target.style.border = dropBorder;
  ev.target.style.backgroundColor = currentColor;
  console.log("Ive left the dropzone!");
});

dropzone.addEventListener("dragenter", function (ev) {
  ev.preventDefault();
  currentColor = ev.target.style.backgroundColor;
  dropBorder = ev.target.style.border;
  ev.target.style.border = "1px dashed black";
});

dropzone.addEventListener("dragover", function (ev) {
  ev.preventDefault();
});

dropzone.addEventListener("drop", function (ev) {
  ev.target.style.border = dropBorder;
  console.log(ev.target);
  console.log("Something has dropped on me");
});
