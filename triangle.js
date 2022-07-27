const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const Tweakpane = require("tweakpane");

const settings = {
  dimensions: [2048, 2048],
  animate: true,
  fps: 50,
};

const params = {
  animate: true,
  frame: 0,
  dimension: 10,
  velocity: 5,
  size: 0.45,
  lineWidth: 3,
};

const sketch = ({ context }) => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = "#080808";
    context.fillRect(0, 0, width, height);

    const cols = params.dimension;
    const rows = cols;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const w = cellw * 0.8;
      const h = cellh * 0.8;
      const f = params.animate ? frame : params.frame;

      let vel = params.velocity;
      if ((col + row) % 2 === 0) vel *= -1;

      let angle = (vel * f) % 360;

      context.save();
      context.fillStyle = "#EEB300";
      context.translate(x, y);
      context.translate(margx, margy);
      context.translate(cellw * 0.5, cellh * 0.5);
      context.lineWidth = params.lineWidth;
      context.beginPath();
      context.rotate((angle * Math.PI) / 180);
      context.moveTo(w * -params.size, h * params.size);
      context.lineTo(w * params.size, h * params.size);
      context.lineTo(0, h * -params.size);
      context.closePath();
      context.strokeStyle = "#EEB300";
      // context.fill();
      context.stroke();
      context.restore();
    }
  };
};

const createPane = () => {
  const pane = new Tweakpane.Pane();
  let folder;

  folder = pane.addFolder({ title: "Grid" });
  folder.addInput(params, "animate");
  folder.addInput(params, "frame", { min: 0, max: 999 });
  folder.addInput(params, "dimension", { min: 5, max: 50, step: 1 });
  folder.addInput(params, "velocity", { min: 1, max: 50, step: 1 });
  folder.addInput(params, "size", { min: 0.1, max: 10 });
  folder.addInput(params, "lineWidth", { min: 1, max: 20, step: 1 });
};

createPane();
canvasSketch(sketch, settings);
