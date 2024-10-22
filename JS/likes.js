let likeBtn = document.querySelector("#likes-btn");
let likesDisplay = document.querySelector("#likes-display");
let dislikeBtn = document.querySelector("#dislikes-btn");
let dislikesDisplay = document.querySelector("#dislikes-display");
let totalDisplay = document.querySelector("#total-display");

let likes = localStorage.getItem("likes") ? localStorage.getItem("likes") : 0;
likesDisplay.textContent = likes;

let dislikes = localStorage.getItem("dislikes")
  ? localStorage.getItem("dislikes")
  : 0;
dislikesDisplay.textContent = dislikes;

let total = localStorage.getItem("total") ? localStorage.getItem("total") : 0;
totalDisplay.textContent = total;

likeBtn.addEventListener("click", function () {
  likes++;
  localStorage.setItem("likes", likes);
  likesDisplay.textContent = localStorage.getItem("likes");
  total = likes + dislikes;
  localStorage.setItem("total", total);
  totalDisplay.textContent = total;
});

dislikeBtn.addEventListener("click", function () {
  dislikes++;
  localStorage.setItem("dislikes", dislikes);
  dislikesDisplay.textContent = localStorage.getItem("dislikes");
  total = likes + dislikes;
  localStorage.setItem("total", total);
  totalDisplay.textContent = total;
});

total.addEventListener("click", function () {
  total = likes + dislikes;
  localStorage.setItem("total", total);
  totalDisplay.textContent = localStorage.getItem("total");
  total = likes + dislikes;
  localStorage.setItem("total", total);
  totalDisplay.textContent = total;
});
