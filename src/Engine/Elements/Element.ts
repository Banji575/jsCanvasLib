import { types } from "../SceneCreator";

export interface IEngineElement {
  update(): Function;
}

export abstract class EngineElement {
  abstract type : types;
  abstract update();
  abstract setUpdate(callback);
  abstract create();
}
