import { WebGL1Renderer } from 'three';
import Scene from './scenes/Scene';

export default class Renderer extends WebGL1Renderer{
  constructor(){
    super({antialias:true,canvas: document.getElementById("bg")
    })
    this.config()
    new Scene(this)
  }

  private config(){
  this.setSize(window.innerWidth,window.innerHeight)
  window.addEventListener("resize", this.resize)
  }
  private resize = () => window.location.reload()

  

}