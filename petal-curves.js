const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const Tweakpane = require("tweakpane");

const settings = {
  dimensions: [2048, 2048],
  animate: true,
};

const params = {
  num: 50,
  x_init: 0,
  y_init: 0,
  line_width: 4,
};

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = "#FBFCFF";
    context.fillRect(0, 0, width, height);

    const w = width;
    const h = height;
    const cx = w * 0.5;
    const cy = h * 0.5;
    const init = params.x_init;
    const end = params.y_init;
    let n = params.num;
    let vel = 1;

    for (let i = 0; i < n; i++) {
      const angle = (((vel * frame * 0.05) % 360) * Math.PI) / 180;
      const bcx1 = 800;
      const bcy1 = bcx1 / 1.3;

      if (i % 3 < 3) context.strokeStyle = "#08759D";
      // if (i % 3 < 2) context.strokeStyle = "#08759D";
      if (i % 3 < 1) context.strokeStyle = "#080808";

      // context.fillStyle = "#EEB300";
      context.lineWidth = params.line_width;
      context.save();
      context.beginPath();
      context.translate(width / 2, height / 2);
      context.moveTo(init, end);
      context.rotate(angle);
      context.bezierCurveTo(-bcx1, bcy1, bcx1, bcy1, init, end);
      // context.fill();
      context.stroke();
      context.restore();
      vel++;
    }
  };
};

const createPane = () => {
  const pane = new Tweakpane.Pane();
  let folder;

  folder = pane.addFolder({ title: "Curves" });
  folder.addInput(params, "num", { min: 1, max: 150, step: 1 });
  folder.addInput(params, "x_init", { min: -800, max: 800 });
  folder.addInput(params, "y_init", { min: -800, max: 800 });
  folder.addInput(params, "line_width", { min: 0, max: 10, step: 1 });
};

createPane();
canvasSketch(sketch, settings);
