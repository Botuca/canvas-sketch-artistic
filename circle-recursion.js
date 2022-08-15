const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [3240, 3240],
};

const sketch = ({ context, width, height }) => {
  const num = 8;
  const x = width * 0.5;
  const y = height * 0.5;
  const radius = width * 0.4;
  const colors = ["#EEB30080", "#7E1F8680", "#FBFCFF80", "#08759D80"];
  const twoColors = [random.pick(colors), random.pick(colors)];

  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "black";
    context.lineWidth = 20;

    context.save();
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.restore();
    context.stroke();
    context.translate(x, y);
    for (let i = 0; i <= num; i++) {
      context.fillStyle = random.pick(twoColors);
      let ix = i * 50;
      let iy = ix;
      let iradius = radius - ix * 1.5;

      drawInsideCircle({ context, radius: iradius, x: -ix, y: iy });
    }
    context.restore();
  };
};

const drawInsideCircle = ({ context, radius, x, y }) => {
  context.save();
  context.beginPath();
  context.arc(-x, -y, radius, 0, 2 * Math.PI);
  context.stroke();
  context.fill();
  context.restore();
};

canvasSketch(sketch, settings);
