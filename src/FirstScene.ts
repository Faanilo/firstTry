import * as THREE from 'three';
export default class FirstScene extends THREE.Scene {
    initialize() {
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshPhongMaterial({ color: 0xFFAD00 })
        const cube = new THREE.Mesh(geometry, material)
        cube.position.z = -5
        cube.position.y = -1

        this.add(cube)

        const light = new THREE.DirectionalLight(0xFFFFFFF, 1)
        light.position.set(1, 4, 1)

        this.add(light)
    }
}