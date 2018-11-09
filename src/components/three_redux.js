import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as THREE from 'three'
import cube from './cube'
import plane from './plane'
import lights from './lights'
import controls from './controls'
import camera from './camera'
import scene from './scene'
import renderer from './renderer'

const mapState = state =>({
    sideA: state.cube.faceSideA,
    sideB: state.cube.faceSideB,
    sideC: state.cube.faceSideC,
    sideD: state.cube.faceSideD,
    sideE: state.cube.faceSideE,
    sideF: state.cube.faceSideF,
})
class Scene extends Component {
    constructor(props) {
        super(props)
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
        this.touchStart = this.touchStart.bind(this)
    }

    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        this.width = width
        this.height = height
        this.camera = camera(this.width, this.height)
        this.renderer = renderer()

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2()
        this.intersected = null
        this.raycaster = raycaster
        this.mouse = mouse
        this.cube = cube.Cube(this.props)
        this.plane = plane.render(this.props)
        this.plane.name = "ground"
        this.ambient = lights.ambient(this.props)
        this.direction = lights.direction(this.props)
        this.lightHelp = lights.helper(this.direction, 1)
        this.renderer.setClearColor('#000000')
        this.renderer.setPixelRatio( window.devicePixelRatio  );
        this.renderer.setSize(width, height)
        //renderer.toneMapping = THREE.ReinhardToneMapping;

        this.scene = scene(this)
        this.controls = controls(this.camera, this.renderer)

        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }
    touchStart( event  ) {
        event.preventDefault();
        const x = +(event.targetTouches[0].pageX / this.width) * 2 +-1;
        const y = -(event.targetTouches[0].pageY / this.height) * 2 + 1;
        this.mouse.x = x

        this.mouse.y = y
        this.raycaster.setFromCamera(this.mouse,this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children);
        const intersection = (intersects.length) > 0
            ? intersects[0]
            : null;
        if( intersection !== null              &&
            intersection.object.type==='Mesh' &&
            intersection.object.name !== "ground"){
            intersection.object.material.color.setHex(0xff0000)

        }
    }

    animate() {
        cube.animate(this.cube, this.props)
        this.renderScene()
        this.controls.update()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div
            onTouchStart={this.touchStart}
            style={{ width: '100%', height: '500px' }}
            ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

export default connect(mapState)(Scene)
