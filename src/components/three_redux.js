import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from 'three'
import cube from './cube'

const mapState = state =>({
    color: state.cube.color
})
class Scene extends Component {
    constructor(props) {
        super(props)
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
    }

    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({ antialias: true })

        camera.position.z = 4
        const Cube = cube()
        scene.add(Cube)
        renderer.setClearColor('#000000')
        renderer.setPixelRatio( window.devicePixelRatio  );
        renderer.setSize(width, height)

        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.cube = Cube

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

    animate() {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.cube.material.color.setHex(this.props.color)

        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div
            style={{ width: '100%', height: '500px' }}
            ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

export default connect(mapState)(Scene)