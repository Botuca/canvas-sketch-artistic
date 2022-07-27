const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = ({ context, width }) => {
  const createArc = (x, y, r) => {
    var radius = r * 0.5;
    context.save();
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.stroke();
    context.restore();

    if (r > 2) {
      createArc(x + radius * 2, y, radius);
      createArc(x - radius * 2, y, radius);
      // createArc(x, y - radius * 2, radius);
    }
  };

  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "white";
    context.lineWidth = 3;
    createArc(width / 2, height / 2, 300);
  };
};

canvasSketch(sketch, settings);
