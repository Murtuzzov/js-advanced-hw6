//ЗАДАЧА No1 | I часть
// const trackbar = document.querySelector(".trackbar");
// const trackButton = document.querySelector(".track-button");

// trackbar.addEventListener("mousedown", (event) => {
//   const offsetX = event.clientX - trackbar.offsetLeft;
//   trackButton.style.left = offsetX + "px";
// });

//_______________________________________________________________________________________________

//ЗАДАЧА No2 | I часть
// const galleryDiv = document.querySelector(".gallery");
// const leftButton = document.querySelector(".left-arrow");
// const rightButton = document.querySelector(".right-arrow");
// const currentImage = document.querySelector(".current-img");

// let currentIndex = 0;

// let photos = [
//   "./images/nature1.jpg",
//   "./images/nature2.jpg",
//   "./images/nature3.jpg",
//   "./images/nature4.jpg",
//   "./images/nature5.jpg",
// ];

// function updateGallery() {
//   currentImage.src = photos[currentIndex];
// }

// updateGallery();

// leftButton.addEventListener("click", function () {
//   currentIndex -= 1;
//   updateGallery();
//   if (currentIndex === 0) {
//     leftButton.style.display = "none";
//   }
//   if (currentIndex < photos.length - 1) {
//     rightButton.style.display = "block";
//   }
// });

// rightButton.addEventListener("click", function () {
//   currentIndex += 1;
//   updateGallery();
//   if (currentIndex === photos.length - 1) {
//     rightButton.style.display = "none";
//   }
//   if (currentIndex > 0) {
//     leftButton.style.display = "block";
//   }
// });

//____________________________________________________________

//ЗАДАЧА No1 | II часть

// const slider = document.querySelector(".slide-show");

// let currentIndex = 0;

// let photos = [
//   "./images/nature1.jpg",
//   "./images/nature2.jpg",
//   "./images/nature3.jpg",
//   "./images/nature4.jpg",
//   "./images/nature5.jpg",
// ];

// setInterval(() => {
//   slider.src = photos[currentIndex];
//   currentIndex += 1;
//   if (currentIndex >= photos.length) {
//     currentIndex = 0;
//   }
// }, 3000);

//__________________________________________________________________________

//ЗАДАЧА No2 | II часть

// const myQuotes = document.querySelector(".quotes");

// const quotes = [
//   "Будьте изменением, которое вы хотели бы видеть в мире.",
//   "Будьте собой; все остальные роли уже заняты.",
//   "Жизнь — это то, что с вами происходит, пока вы строите планы.",
//   "Жизнь не представляет интереса без маленьких побед и больших потерь.",
//   "Сложно быть профессионалом, когда всё делаешь впервые.",
// ];

// const styles = [
//   { backgroundColor: "lightblue", color: "black" },
//   { backgroundColor: "lightgreen", color: "black" },
//   { backgroundColor: "lightcoral", color: "white" },
//   { backgroundColor: "lightpink", color: "black" },
//   { backgroundColor: "lightskyblue", color: "black" },
// ];

// let currentIndex = 0;

// setInterval(() => {
//   myQuotes.textContent = quotes[currentIndex];
//   myQuotes.style.backgroundColor = styles[currentIndex].backgroundColor;
//   myQuotes.style.color = styles[currentIndex].color;
//   currentIndex += 1;
//   if (currentIndex >= quotes.length) {
//     currentIndex = 0;
//   }
//   if (currentIndex >= styles.length) {
//     currentIndex = 0;
//   }
// }, 3000);
