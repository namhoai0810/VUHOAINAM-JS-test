let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 60;
let y = 80;
let width = 120;
let height = 70;
let color = 'red';

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);