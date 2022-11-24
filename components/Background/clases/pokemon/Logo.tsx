import { Group } from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'


export default  class Logo {

    private objet:Group
    private contador = 0

    constructor(scene,loader:GLTFLoader){


        loader.load("/logo.glb", (gltf) =>{
            this.objet = gltf.scene
            this.posicionar()
            

            scene.add(this.objet)


        })
        this.update()

    }

    private posicionar(){
        this.objet.translateZ(-10)
        if(window.innerWidth > 900){
            const ratio = (window.innerWidth - 900 ) * 2.2 / 460 + 5.6
        this.objet.translateY(4)
        this.objet.translateX(ratio)
        }else{
            this.objet.translateY(7)
        }
        
    }


    private update(){

        this.contador += 0.01
        if(this.objet)this.objet.rotation.y = Math.sin(this.contador)/5

        requestAnimationFrame(this.update.bind(this))

    }
}