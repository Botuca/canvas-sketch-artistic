const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [3240, 3240],
};

const sketch = ({ context, width, height }) => {
  const num = 6;
  const size = 1500;
  const xCenter = width * 0.5;
  const yCenter = height * 0.5;

  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    context.lineWidth = 10;

    context.translate(xCenter, yCenter);
    drawLines({ context, size, num });
  };
};

const drawLines = ({ context, size, num }) => {
  context.save();
  context.beginPath();

  for (let i = 0; i < num; i++) {
    // context.moveTo(0, 0);
    context.rotate((2 / num) * Math.PI);
    // context.shadowColor = "blue";
    // context.shadowBlur = 50;
    context.lineJoin = "round";
    context.lineTo(0, -size);
    // context.lineTo(size, 0);
    // context.lineTo(-size, 0);
    // context.lineTo(0, size);
  }

  context.closePath();
  context.stroke();
  context.restore();
};

canvasSketch(sketch, settings);
