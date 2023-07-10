import * as THREE from 'three';

/**
 * To actually display anything in three.js, we need three things:
 * - A Scene
 * - A Camera
 * - A Renderer
 */

// Create Scene
const scene = new THREE.Scene();

/**
 * Create Camera.
 * Like pretty much any software with cameras, there are multiple types of camera. 
 * For this initial example, we will use a perspective camera.
 * 
 * The first parameter is the field of view. This is the exent of the scene that is visible at any time and is provided in degrees.
 * 
 * The second parameter is the aspect ratio. Typically, you want the ratio to be the width / height.
 * 
 * The third parameter is the near clipping plane. Objects closer to the camera than the near clipping plane will not render.
 * 
 * The fourth parameter is the far clipping plane. Objects further away from the camera will not be rendered.
 */
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

/**
 * Create the renderer and set the size of it.
 * 
 * renderer.setSize( window.innerWidth, window.innerHeight );
 * 
 * We set this to the area we want to fill within our app.  
 * By setting it to width and height of browser, we would say we want to fill up the browser.
 * We could also divide each by two to only take up part of the browser, for say performance reasons.
 * NOTE: I added the /2 to each so that it would be smaller since it's just a learning example
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 );

// Add the renderer to our html document.  This will be a canvas element
document.body.appendChild( renderer.domElement );

// With the three required items now setup, we can move on to rendering objects to the screen.
// We will render a cube and have it rotate

// Create a BoxGeometry which contains all of the points(vertices) and fill(faces) of the cube.
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// Create a material which we can add to the cube to give it color.
// There are many options for materials and each material takes in an object of properties to initialize it.
// For this example we will use a simple MeshBasicMaterial and pass it a green color.
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// Finally, we need a mesh. 
// A mesh in an object that takes some geometry(the cube) and applies a mesh to it.
// We can add this to the scene and move it around freely.
const cube = new THREE.Mesh( geometry, material );
// By default, when we call scene.add(obj), the object we pass in will be given the coordinates (0,0,0) 
// This would cause the object and camera to be inside each other, so we will move the camera out some by setting the z-position of the vector3 to 5
scene.add( cube );
camera.position.z = 5;

/**
 * At this point, we've created the canvas and a cube, but nothing would display. 
 * We need to create a render/animation loop.
 * This loop will cause the renderer to draw the scene everytime the screen is refreshed. 
 * On a typical screen this would be 60 times per second (60 FPS)
 * 
 */
function animate() {
    // One advantage to requestAnimationFrame over setIntervale is that:
    // it pauses when the user navigates to another browser tab, not wasting their processing power and battery life
    requestAnimationFrame( animate );
    // Add a bit to the value of the x rotation and y rotation on each render which will animate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();

