import * as THREE from 'three';


const width = window.innerWidth
const height = window.innerHeight

const renderer = new THREE.WebGL1Renderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
})

renderer.setSize(width,height)

const mainCamera = new THREE.PerspectiveCamera(60,width/height,0.1,100)
const scene = new THREE.Scene()

renderer.render(scene,mainCamera)