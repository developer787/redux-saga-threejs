import * as THREE from 'three'

const Cube = (props)=>{
        const geometry = new THREE.CubeGeometry(2, 3, 2)
        geometry.faces[0].color.setHex(props.sideA)
        geometry.faces[1].color.setHex(props.sideA)
        geometry.faces[2].color.setHex(props.sideB)
        geometry.faces[3].color.setHex(props.sideB)
        //geometry.faces.map(e=>e.color.setHex(Math.random() * 0xffffff))

        const material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors  }  );

        const cube = new THREE.Mesh(geometry, material)
        return cube

}
export default Cube
