const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [3240, 3240],
};

const sketch = ({ context, width, height }) => {
  const xCenter = width * 0.5;
  const yCenter = height * 0.5;

  return ({ context, width, height }) => {
    context.fillStyle = "#080808";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "#EEB300";
    context.lineWidth = 6;
    createArc2({ x: xCenter, y: yCenter, r: 810, context });
  };
};

const createArc2 = ({ context, x, y, r }) => {
  let radius = r * 0.5;

  context.save();
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.stroke();
  context.restore();

  if (r > 2) {
    createArc2({ context, x: x + radius * 2, y, r: radius });
    createArc2({ context, x: x - radius * 2, y, r: radius });
    // createArc2({ context, x, y: y + radius * 2, r: radius });
    // createArc2({ context, x, y: y - radius * 2, r: radius });
  }
};

canvasSketch(sketch, settings);
