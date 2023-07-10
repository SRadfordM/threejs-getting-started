import * as THREE from 'three';

/**
 * Follow the same scene setup to create the canvas as in "Creating a Scene"
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();


// Now we start to make the lines
// For a material we should use LineBasicMaterial or LineDashedMaterial
// This material has a property for linewidth, but due to limitations
// of the OpenGL Core Profile with the WebGL renderer on most platforms,
// the line will render with a width of 1 and ignore the given value. 
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// Along with the material, we need the geometry
const points = [];
// Lines are drawn between pairs of vertices.
// Each point is a Vector3(x,y,z)
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );