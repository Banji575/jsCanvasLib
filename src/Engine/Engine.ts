import { Line } from "./Elements/Line";
import { circle, SceneCreator } from "./SceneCreator";

export class Engine {
  context: CanvasRenderingContext2D;
  scenes: SceneCreator[] = [];
  constructor(public canvas: HTMLCanvasElement) {
    this.init();
    this.gameLoop();
  }

  init() {
    this.context = this.canvas.getContext("2d");
  }

  createScene() {
    const scene = new SceneCreator(this.context);
    this.scenes.push(scene);
    return scene;
  }

  gameLoop() {
    this.updatePool();
    this.render();
    window.requestAnimationFrame(this.gameLoop.bind(this));
  }

  updatePool() {
    if (this.scenes.length === 0) return;
    this.scenes.forEach((el) => {
      el.getElems().forEach((obj) => obj.update());
    });
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.scenes.forEach((el) => {
      el.getElems().forEach((obj) => {
        switch (obj.type) {
          case "line":
            this.renderLine(obj);
            break;
          case "circle": {
              this.renderCircle(obj)
          }
        }
      });
    });
  }

  renderLine(line: any) {
    this.context.beginPath();

    this.context.fillStyle = line.params.color;
    this.context.moveTo(line.params.xStart, line.params.yStart);
    this.context.fillStyle = line.params.width;
    this.context.lineTo(line.params.xEnd, line.params.yEnd);
    this.context.stroke();
    this.context.fill();
  }
  renderCircle(circle: any) {
      const params:circle = circle.params
    this.context.beginPath();
    this.context.arc(params.x, params.y,params.radius, params.startAngle, params.endAngle, params.counterclockwise);
    //this.context.arc(100, 75, 50, 0, 2 * Math.PI);
    this.context.stroke();

  }
}
