import * as THREE from 'three'

const Renderer = (props)=>{

    const renderer = new THREE.WebGLRenderer({ antialias: true })

    return renderer

}
export default Renderer
