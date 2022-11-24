import { Group } from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'


export default  class  Charizard {

    private objet:Group

    constructor(scene,loader:GLTFLoader){


        loader.load("/charizard.glb", (gltf) =>{
            this.objet = gltf.scene
            this.posicionar()
            

            scene.add(this.objet)


        })

    }

    private posicionar(){
        if(window.innerWidth > 900){
            const ratio = (window.innerWidth - 900 ) * -5 / 600 + 0.4
            this.objet.translateY(-2)
            this.objet.translateX(-8)
            this.objet.translateZ(15)
            this.objet.rotateY(Math.PI/4)
            this.objet.scale.set(0.85,0.85,0.85)
        } else if (window.innerWidth < 600){
            const ratio = (window.innerWidth - 600 ) * 3 / 600 + 0.4
            this.objet.translateY(-2)
            this.objet.translateX(-8)
            this.objet.translateZ(13)
            this.objet.rotateY(Math.PI/4 )
            this.objet.scale.set(0.85,0.85,0.85)
        }
         
        else{
            this.objet.translateZ(36.5)
            this.objet.translateY(1.8)
            this.objet.translateX(0.4 )
        }
    }
    }