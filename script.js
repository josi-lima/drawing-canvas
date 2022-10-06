// Access canvas from the DOM 
const canvas = document.querySelector('#draw');

// Declare variables for getContext

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

