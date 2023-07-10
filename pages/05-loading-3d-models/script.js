// @ts-nocheck
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/**
 * Follow the same scene setup to create the canvas as in "Creating a Scene"
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.z = 5;
camera.position.y = -2;

const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load(
    './models/scene.gltf', 
    function ( gltf ) {
        gltf.scene.scale.set(4, 4, 4);
        scene.add( gltf.scene );
        renderer.render( scene, camera );
    }, 
    function(xhr) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }, 
    function ( error ) {
        console.error( error );
    }
);

