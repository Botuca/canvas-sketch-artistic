const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [3240, 3240],
  // animate: true,
  duration: 3,
  fps: 60,
};

const sketch = ({ context, width, height }) => {
  const num = 10;
  const size = width / num;

  return ({ context, width, height, playhead }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.lineWidth = 10;

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        context.save();
        context.beginPath();
        context.moveTo(j * size, 0);
        if (random.value() > 0.5) {
          context.fillStyle = "red";
          context.strokeStyle = "black";
          context.lineWidth = 30;
          // context.lineTo((j + 1) * size, size);
          context.rect(j * size, 0, (j + 1) * size, size);
        } else {
          context.strokeStyle = "yellow";
          context.fillStyle = "black";
          context.rect(j * size, 0, (j + 1) * size, size);
          // context.lineTo((j - 1) * size, size);
        }
        context.fill();
        context.stroke();
        context.restore();
      }
      context.translate(0, size);
    }
  };
};

canvasSketch(sketch, settings);
