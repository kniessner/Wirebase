import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*=================================================
	Main Settings - Camera etc.
=================================================*/
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, (window.innerWidth - 15) / window.innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer();
var raycaster;
renderer.setSize(window.innerWidth - 15, (window.innerHeight));
document.getElementById('Orbit').appendChild(renderer.domElement);
camera.position.z = 520;
camera.position.x = -0;
/*=================================================
	MAIN ELEMENTS
=================================================*/

var geometry = new THREE.TorusGeometry(202, 15, 10, 150);
var material = new THREE.MeshLambertMaterial({color: "rgba(4, 4, 4,1)", morphTargets: true, wireframe: false});
var RingCore = new THREE.Mesh(geometry, material);
scene.add(RingCore)

var geometry = new THREE.TorusGeometry(202, 20, 10, 100);
var material = new THREE.MeshLambertMaterial({color: "rgba(94, 236, 255,0.4)", morphTargets: true, wireframe: true});
var RingWire = new THREE.Mesh(geometry, material);
scene.add(RingWire);
RingCore.position.z = 150;
RingWire.position.z = 150;
RingCore.position.y = 150;
RingWire.position.y = 150;
RingCore.position.x = -150;
RingWire.position.x = -150;

/*=================================================
	LIGHTS
=================================================*/

scene.add(new THREE.AmbientLight(0x222222));
light = new THREE.DirectionalLight(0x222222);
light.position.set(1, 1, 1);
scene.add(light);
light = new THREE.DirectionalLight('tomato');
light.position.set(-200, -200, -200);
scene.add(light);
light = new THREE.AmbientLight(0x222222);
scene.add(light);
var hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
scene.add(hemisphereLight);

/*=================================================
	RANDOM ELEMENTS
=================================================*/

var geometry = new THREE.SphereGeometry(1, 32, 32);
var material = new THREE.MeshLambertMaterial({color: 0xFDFDFDF, morphTargets: true, wireframe: false});
for (var i = 0; i < 200; i++) {
  var cube = new THREE.Mesh(geometry, material);
  cube.position.x = (Math.random() - 0.5) * 1200;
  cube.position.y = (Math.random() - 0.5) * 1200;
  cube.position.z = (Math.random() - 0.5) * 1200;
  cube.updateMatrix();
  cube.matrixAutoUpdate = false;
  scene.add(cube);
}
this.light = new THREE.PointLight();
this.light.position.set(0, 0, 0);
this.scene.add(this.light);

/*=================================================
	Floor Example
=================================================*/

/*
        		geometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
				geometry.rotateX( - Math.PI / 2 );
				for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {
					var vertex = geometry.vertices[ i ];
					vertex.x += Math.random() * 20 - 10;
					vertex.y += Math.random() * 2;
					vertex.z += Math.random() * 20 - 10;
				}


				for ( var i = 0, l = geometry.faces.length; i < l; i ++ ) {
					var face = geometry.faces[ i ];
					face.vertexColors[ 0 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
					face.vertexColors[ 1 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
					face.vertexColors[ 2 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
				}
				material = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } );
				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );*/
/*=================================================
	RENDER
=================================================*/

var render = function() {
  RingWire.rotation.x += 0.006;
  RingCore.rotation.x += 0.006;
  RingWire.rotation.y += 0.003;
  RingCore.rotation.y += 0.003;
  RingWire.rotation.z += 0.0006;
  RingCore.rotation.z += 0.0006;
  camera.rotation.z -= 0.0006;
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();
