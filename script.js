// Access canvas from the DOM 
const canvas = document.querySelector('#draw');

// Declare variables for .getContext()

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 60;

// Variables for the mouse / touch event as we draw

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// Function for the mouse / touch event

function draw(e) {
  if (!isDrawing) return; // stops the fn from running when mouse down
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

  if (ctx.lineWidth >= 60 || ctx.lineWidth <= 2) {
    direction = !direction; // flip direction
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

// Adding eventListeners --- desktop only

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// Adding eventListeners --- touch screen only (mobile)

canvas.addEventListener('touchstart', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('touchstart', draw);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', () => isDrawing = false);






