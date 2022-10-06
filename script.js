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



