import { circle, line, types } from "../SceneCreator";
import { EngineElement } from "./Element";

export class Circle extends EngineElement{

    renderCallback:any
    constructor(private context:CanvasRenderingContext2D,public type:types ,public params:circle ,){
        super()
        this.create()
    }

    setUpdate(callback) {
        this.renderCallback = callback
    }
    update(){
        if(this.renderCallback){
            this.renderCallback()
        }
    }


    create() {
   
        
    }
    
}