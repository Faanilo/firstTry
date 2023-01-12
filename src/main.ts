import * as THREE from 'three';
import FirstScene from './FirstScene';

const width = window.innerWidth
const height = window.innerHeight

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
})
renderer.setSize(width, height)


//field view  / aspect ratio / near plane /  far plane >>
const mainCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
const scene = new FirstScene()
scene.initialize()


renderer.render(scene, mainCamera)