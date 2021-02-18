var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//text sectionconst
colors = ["#f5a147", "#51cad8", "#112b39"];
const numLines = 3;
var currCount = numLines;
const texts = document.querySelectorAll("#textClip text");
const blobs = document.querySelectorAll("#background path");

function colorBlobs() {
  blobs.forEach((blob) => {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
  });
}

function nextIteration() {
  // Change the color of all the blobs
  colorBlobs();

  // Hide the old set of lines
  let startVal = currCount - numLines;
  if (startVal < 0) {
    startVal = texts.length - numLines;
  }
  for (let i = startVal; i < startVal + numLines; i++) {
    texts[i].style.display = "none";
  }
  // Show new set of lines
  for (let j = currCount; j < currCount + numLines; j++) {
    texts[j].style.display = "inline";
  }
  currCount += numLines;
  if (currCount >= texts.length) {
    currCount = 0;
  }
}

// Since all of our blobs are using the same animation, we only
// need to listen to one of them
blobs[0].addEventListener("animationiteration", nextIteration);

colorBlobs();

// text section completed
