import OrbitControls from 'orbit-controls-es6';

const Controls = (camera, renderer)=>{
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = 1
    controls.minPolarAngle = 1
    controls.rotateSpeed = 0.25
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.enableZoom = false

    return controls

}
export default Controls
