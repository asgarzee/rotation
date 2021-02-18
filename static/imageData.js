import { Rotator } from './rotator.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var WIDTH = 100;
var HEIGHT = 100;
var ANGLE = 0.5;

function createImage(width, height){
  let imageData = ctx.createImageData(width, height);
  for (let i = 0; i < imageData.data.length; i += 4) {
    // Modify pixel data
    imageData.data[i + 0] = 190;        // R value
    imageData.data[i + 1] = 0;        // G value
    imageData.data[i + 2] = 210;  // B value
    imageData.data[i + 3] = 255;      // A value
  }
  return imageData;
}
let sourceImage = createImage(WIDTH,HEIGHT);
// ctx.putImageData(sourceImage, 0, 0);

var rotateObj = new Rotator();

performance.mark('beginRotation');
let newImage = rotateObj.rotate(sourceImage, ANGLE);
performance.mark('endRotation');
    
// Draw image data to the canvas
ctx.putImageData(newImage, 20, 20);

let perf = performance.measure('measureRotation','beginRotation', 'endRotation');

document.getElementById("duration-perf").textContent = perf.duration;

console.log(perf);
