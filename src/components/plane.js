import * as THREE from 'three'

const render = (props)=>{
        const geo = new THREE.PlaneBufferGeometry(80, 80, 8, 8);
    const mat = new THREE.MeshPhongMaterial({ color: 0x878055, side: THREE.DoubleSide  });
    const plane = new THREE.Mesh(geo, mat);
    plane.rotateX( - Math.PI / 2 );
    plane.receiveShadow = true

        return plane

}
const animate = (plane,props)=>{
}
const ship = {
    render,
    animate
}
export default ship
