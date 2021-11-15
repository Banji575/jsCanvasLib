import { Engine } from "./Engine/Engine";
import { circle, line, SceneCreator, types } from "./Engine/SceneCreator";
const canvas: HTMLCanvasElement = document.querySelector("#canvas");

const engine = new Engine(canvas);
const mainScene = engine.createScene();
const coordPoint: line = {
  xStart: 10,
  yStart: 10,
  xEnd: 50,
  yEnd: 50,
  color: "red",
  width: 2,
};

const circleCoord: circle = {
  x: 100,
  y: 50,
  radius: 4,
  startAngle: 0,
  endAngle: 2 * Math.PI,
};
const firstLine = mainScene.Line(coordPoint);

const firstLine1 = mainScene.Line(coordPoint);

const firstCircle = mainScene.Cirlce(circleCoord);

firstLine.update = () => {
  firstLine.params.xStart += 1;
  firstLine.params.yEnd += 1;
  firstLine.params.width += 1;
};

firstLine1.update = () => {
  const params = firstLine1.params;
};

firstCircle.update = () => {
  const currentRadius = 3;
  firstCircle.params.x += (2 * Math.PI * currentRadius) / 3;
  firstCircle.params.y += (2 * Math.PI * currentRadius) / 3;
  // if(params.radius < currentRadius && dir){
  //     params.radius += 1
  // }

  // if(params.radius >= currentRadius){
  //     params.x +=1
  // }else{
  //     params.y += 2
  // }
};
