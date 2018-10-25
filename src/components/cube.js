import * as THREE from 'three'

const Cube = color=>{
        const geometry = new THREE.CubeGeometry(1, 1, 1)
        geometry.faces.map(e=>e.color.setHex( Math.random() * 0xffffff  ))

        const material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors  }  );

        const cube = new THREE.Mesh(geometry, material)
        return cube

}
export default Cube
