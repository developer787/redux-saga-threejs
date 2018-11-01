import * as THREE from 'three'

const ambient = (props)=>{

    const ambientLight = new THREE.AmbientLight(0xffffff);
        return ambientLight

}
const direction = ()=>{

            const dirLight = new THREE.DirectionalLight(0xffffff, 1 );
            dirLight.position.set(0, 100, 0);
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 500;
    dirLight.shadow.camera.left = -30;
    dirLight.shadow.camera.bottom = -30;
    dirLight.shadow.camera.right = 30;
    dirLight.shadow.camera.top = 30;

    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
        return dirLight
}
const animate = (plane,props)=>{
}
const helper = light=>{
    const help = new THREE.CameraHelper( light.shadow.camera  );

    return help
}
const ship = {
    ambient,
    helper,
    direction,
    animate
}
export default ship
