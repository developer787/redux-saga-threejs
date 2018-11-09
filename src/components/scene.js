import * as THREE from 'three'

const Scene = (props)=>{

        const scene = new THREE.Scene()
        scene.add(props.cube)
        scene.add(props.plane)
        scene.add(props.ambient)
        scene.add(props.direction)
    return scene

}
export default Scene
