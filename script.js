// Access canvas from the DOM 
const canvas = document.querySelector('#draw');

// Declare variables for .getContext()

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// Variables for the mouse event as we draw

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// Function for the mouse event

function draw(e) {
  if (!isDrawing) return; // stops the fn from running when moused down
  console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // starts from
  ctx.lineTo(e.offsetX, e.offsetY); // goes to
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; // destructuring an array
  
  // Conditional to change color according to hsl
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  // Conditional to change lineWidth

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction; // flip direction
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}




