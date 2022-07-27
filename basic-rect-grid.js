const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const cols = 10;
    const rows = 10;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    // const off = width * 0.02;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const w = cellw * 0.8;
      const h = cellh * 0.8;
      context.save();
      // context.translate(x, y);
      context.translate(margx * 0.8, margy);
      context.translate(cellw * 0.5, cellh * 0.5);

      context.beginPath();
      context.rect(x, y, w, h);
      context.stroke();
      context.restore();

      // if (Math.random() > 0.5) {
      //   context.beginPath;
      //   context.rect(x + off / 2, y + off / 2, w - off, h - off);
      //   context.stroke();
      // }
    }
  };
};

canvasSketch(sketch, settings);
