import { AnimationMixer, Clock, Group } from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { textChangeRangeIsUnchanged } from 'typescript'


export default  class Pokeball {

    private objet:Group
    private clock = new Clock()
    private animation: AnimationMixer

    constructor(scene,loader:GLTFLoader){
        this.clock = new Clock()
        


        loader.load("/pokeball.glb", (gltf) =>{
            this.objet = gltf.scene
            
            this.posicionar()
            this.animar(gltf)
           


            scene.add(this.objet)


        })
        this.update()

    }
    
    private posicionar(){
        if(window.innerWidth > 900){
            const ratio = (window.innerWidth - 900 ) * 5 / 460 + 14
        this.objet.translateY(-1)
        this.objet.translateX(ratio)
        this.objet.translateZ(-23)
        this.objet.rotateY(-Math.PI/1.5)
        }else{
            this.objet.translateY(5.8)
            this.objet.translateZ(-20)
            this.objet.rotateY(-Math.PI/2)

        }
        this.objet.rotateZ(Math.PI/20)
        this.objet.scale.set(2,2,2)
       
        

    }

    private update(){
        const delta = this.clock.getDelta()
       

        
        if(this.objet) this.animation.update(delta)
        

        requestAnimationFrame(this.update.bind(this))
    }
    private animar(gltf){
         this.animation = new AnimationMixer(this.objet)
            const action = this.animation.clipAction(gltf.animations[0])
            action.play()
    }
}