import React, { Component } from 'react'
import * as THREE from 'three'

const Cube = color=>{
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: color })
        const cube = new THREE.Mesh(geometry, material)
        return cube

}
export default Cube
