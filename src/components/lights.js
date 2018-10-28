import * as THREE from 'three'

const ambient = (props)=>{

    const ambientLight = new THREE.AmbientLight(0x333333);
        return ambientLight

}
const direction = ()=>{

            const dirLight = new THREE.DirectionalLight(0xffffff, 1);
            dirLight.position.set(0, 20, 0);
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 5000;
    dirLight.shadow.camera.left = -500;
    dirLight.shadow.camera.bottom = -500;
    dirLight.shadow.camera.right = 500;
    dirLight.shadow.camera.top = 500;

    dirLight.castShadow = true;
        return dirLight
}
const animate = (plane,props)=>{
}
const ship = {
    ambient,
    direction,
    animate
}
export default ship
