import * as THREE from 'three'

const Camera = (width, height)=>{

    const camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        0.1,
        1000
    )
    camera.position.set(0, 100, 60)
    return camera

}
export default Camera
