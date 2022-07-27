const canvasSketch = require("canvas-sketch");
const { createCanvas } = require("canvas");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1000, 1000],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#08759D";
    context.fillRect(0, 0, width, height);

    const colors = ["#080808", "#EEB300", "#7E1F86"];
    const cols = 10;
    const numCells = cols * cols;
    const circleRadius = width / cols / 2;
    const circleDiameter = circleRadius * 2;

    for (let i = 0; i < numCells; i++) {
      const colorFill = random.pick(colors);
      const colorStroke = "white";
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * circleDiameter;
      const y = row * circleDiameter;

      context.save();
      context.translate(x, y);
      context.fillStyle = colorFill;
      context.strokeStyle = colorStroke;
      context.lineWidth = 3;
      context.beginPath();
      const sum = col + row;
      // if (random.chance((probability = 0.5))) {
      // if (sum % 2 === 0) {
      context.arc(circleRadius, circleRadius, circleRadius, 0, 2 * Math.PI);
      // }
      context.fill();
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings).then(() => {
  const out = fs.createWriteStream("output.png");
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () => console.log("Done rendering"));
});
