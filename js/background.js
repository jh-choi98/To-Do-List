const image = document.createElement("img");
const imageIndices = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = imageIndices[Math.floor(Math.random() * imageIndices.length)];
image.src = `img/${chosenImage}`;

document.body.appendChild(image);