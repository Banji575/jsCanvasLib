import { Circle } from "./Elements/Circle";
import { EngineElement } from "./Elements/Element";
import { Line } from "./Elements/Line";

export enum types {
  line = "line",
  circle = "circle",
}
export interface line {
  xStart: number;
  yStart: number;
  xEnd: number;
  yEnd: number;
  color?: string;
  width?: number;
}
export interface circle {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  counterclockwise ?: boolean;
}

export interface IPropsType {
  circle: circle;
  line: line;
}

export class SceneCreator {
  elems:EngineElement[] = []
  constructor(private context: CanvasRenderingContext2D) {}

  createObject() {}

  Line(props: line) {
      const line = new Line(this.context, types.line, { ...props });
      this.elems.push(line)
      return line
  }
  getElems(){
      return this.elems
  }
  Cirlce(props: circle) {
      const circle = new Circle(this.context, types.circle, {...props})
      this.elems.push(circle)
      return circle
  }
}
