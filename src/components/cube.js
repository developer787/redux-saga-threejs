import * as THREE from 'three'

const Cube = (props)=>{
        const geometry = new THREE.CubeGeometry(2, 3, 2)
        geometry.faces[0].color.setHex(props.sideA)
        geometry.faces[1].color.setHex(props.sideA)
        geometry.faces[2].color.setHex(props.sideB)
        geometry.faces[3].color.setHex(props.sideB)
        geometry.faces[4].color.setHex(props.sideC)
        geometry.faces[5].color.setHex(props.sideC)
        geometry.faces[6].color.setHex(props.sideD)
        geometry.faces[7].color.setHex(props.sideD)
        geometry.faces[8].color.setHex(props.sideE)
        geometry.faces[9].color.setHex(props.sideE)
        geometry.faces[10].color.setHex(props.sideF)
        geometry.faces[11].color.setHex(props.sideF)
        //geometry.faces.map(e=>e.color.setHex(Math.random() * 0xffffff))

        const material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors  }  );

        const cube = new THREE.Mesh(geometry, material)
        return cube

}
const animate = (cube,props)=>{
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        cube.geometry.faces[0].color.setHex(props.sideA)
        cube.geometry.faces[1].color.setHex(props.sideA)
        cube.geometry.faces[2].color.setHex(props.sideB)
        cube.geometry.faces[3].color.setHex(props.sideB)
        cube.geometry.faces[4].color.setHex(props.sideC)
        cube.geometry.faces[5].color.setHex(props.sideC)
        cube.geometry.faces[6].color.setHex(props.sideD)
        cube.geometry.faces[7].color.setHex(props.sideD)
        cube.geometry.faces[8].color.setHex(props.sideE)
        cube.geometry.faces[9].color.setHex(props.sideE)
        cube.geometry.faces[10].color.setHex(props.sideF)
        cube.geometry.faces[11].color.setHex(props.sideF)
        cube.geometry.colorsNeedUpdate = true;
}
const ship = {
    Cube,
    animate
}
export default ship
