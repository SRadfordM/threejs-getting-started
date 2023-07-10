import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500 );

const scene = new THREE.Scene();

renderer.render( scene, camera );