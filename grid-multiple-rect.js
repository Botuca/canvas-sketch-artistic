const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#EEB300";
    context.fillRect(0, 0, width, height);

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.05;
    const ix = width * 0.17;
    const iy = height * 0.17;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;
        const off = width * random.range(0.02, 0.09);

        context.beginPath();
        context.strokeStyle = "#080808";
        context.lineWidth = width * random.range(0.005, 0.03);
        context.rect(x, y, w, h);
        context.stroke();

        // if (Math.random() > 0.5) {
        context.beginPath();
        context.strokeStyle = "#7E1F86";
        context.lineWidth = width * random.range(0.005, 0.03);
        context.rect(x + off / 2, y + off / 2, w - off, h - off);
        context.stroke();
        // }
      }
    }
  };
};

canvasSketch(sketch, settings);
