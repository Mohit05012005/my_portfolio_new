const container = document.querySelector('.container');
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; 
// import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
container.appendChild(renderer.domElement);
let n = 1;
const scene = new THREE.Scene();
// scene.background = new THREE.Color(0.3,0.2,0.1);
const camera = new THREE.PerspectiveCamera(150,window.innerWidth/window.innerHeight,0.1,10000);
camera.position.set(0,700,3500);


const point = new THREE.DirectionalLight(0xffffff,1.0);
point.intensity = 1;
point.position.set(0,1000,0);
scene.add(point);

const ambient = new THREE.AmbientLight(0xffffff,0.7);
scene.add(ambient);

// const gridhelper = new THREE.GridHelper(10000,10);
// scene.add(gridhelper);

// sun
const geo = new THREE.SphereGeometry(n*109,45,62);
const texture = new THREE.TextureLoader().load("./planet/sun.jpeg");
const texture2  = new THREE.TextureLoader().load("./planet/sun2.jpeg");
const material = new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: texture2,
    roughness: 0,
    flatShading: true,
    normalScale: 0.9,
    
});
const cube = new THREE.Mesh(geo,material);
scene.add(cube);


// copy sun as (mercury)
const geo_c = new THREE.SphereGeometry(n*109,45,62);
const texture_c = new THREE.TextureLoader().load("./planet/mercury.jpeg");
const texture2_c  = new THREE.TextureLoader().load("./planet/mercury2.jpeg");
const material_c = new THREE.MeshStandardMaterial({
    map: texture_c,
    normalMap: texture2_c,
    roughness: 1,
    normalScale: 0.9
});
const cube_c = new THREE.Mesh(geo_c,material_c);
cube_c.position.x = 900;
scene.add(cube_c);


// sun as venus
const geo_v = new THREE.SphereGeometry(n*109,45,62);
const texture_v = new THREE.TextureLoader().load("./planet/venus.jpeg");
const texture2_v  = new THREE.TextureLoader().load("./planet/venus2.jpeg");
const material_v = new THREE.MeshStandardMaterial({
    map: texture_v,
    normalMap: texture2_v,
    roughness: 1,
    normalScale: 0.9
});
const cube_v = new THREE.Mesh(geo_v,material_v);
cube_c.position.x = 900;
scene.add(cube_v);


// sun to earth
const geo_e = new THREE.SphereGeometry(n*109,45,62);
const texture_e = new THREE.TextureLoader().load("./planet/newearth.jpg");
const texture2_e  = new THREE.TextureLoader().load("./planet/newearth2.jpg");
const material_e = new THREE.MeshStandardMaterial({
    map: texture_e,
    normalMap: texture2_e,
    roughness: 1,
    normalScale: 0.9
});
const cube_e = new THREE.Mesh(geo_e,material_e);
cube_c.position.x = 900;
scene.add(cube_e);


// sun to mars
const geo_m = new THREE.SphereGeometry(n*109,45,62);
const texture_m = new THREE.TextureLoader().load("./planet/mars.jpeg");
const texture2_m  = new THREE.TextureLoader().load("./planet/mars2.jpeg");
const material_m = new THREE.MeshStandardMaterial({
    map: texture_m,
    normalMap: texture2_m,
    roughness: 1,
    normalScale: 0.9
});
const cube_m = new THREE.Mesh(geo_m,material_m);
cube_c.position.x = 900;
scene.add(cube_m);


// sun to jupeter
const geo_j = new THREE.SphereGeometry(n*109,45,62);
const texture_j = new THREE.TextureLoader().load("./planet/jupiter.jpeg");
const texture2_j  = new THREE.TextureLoader().load("./planet/jupeter2.jpeg");
const material_j = new THREE.MeshStandardMaterial({
    map: texture_j,
    normalMap: texture2_j,
    roughness: 1,
    normalScale: 0.9
});
const cube_j = new THREE.Mesh(geo_j,material_j);
scene.add(cube_j);


//sun to saturn
const geo_sa = new THREE.SphereGeometry(n*109,45,62);
const texture_sa = new THREE.TextureLoader().load("./planet/saturn.jpeg");
const texture2_sa  = new THREE.TextureLoader().load("./planet/saturn2.jpeg");
const material_sa = new THREE.MeshStandardMaterial({
    map: texture_sa,
    normalMap: texture2_sa,
    roughness: 1,
    normalScale: 0.9
});
const cube_sa = new THREE.Mesh(geo_sa,material_sa);

scene.add(cube_sa);


// sun to uranus
const geo_u = new THREE.SphereGeometry(n*109,45,62);
const texture_u = new THREE.TextureLoader().load("./planet/uranus.jpeg");
const texture2_u  = new THREE.TextureLoader().load("./planet/uranus2.jpeg");
const material_u = new THREE.MeshStandardMaterial({
    map: texture_u,
    normalMap: texture2_u,
    roughness: 1,
    normalScale: 0.9
});
const cube_u = new THREE.Mesh(geo_u,material_u);
scene.add(cube_u);


// sun to neptune
const geo_n = new THREE.SphereGeometry(n*109,45,62);
const texture_n = new THREE.TextureLoader().load("./planet/uranus.jpeg");
const texture2_n  = new THREE.TextureLoader().load("./planet/uranus2.jpeg");
const material_n = new THREE.MeshStandardMaterial({
    map: texture_n,
    normalMap: texture2_n,
    roughness: 1,
    normalScale: 0.9
});
const cube_n = new THREE.Mesh(geo_u,material_n);
scene.add(cube_n);


// next
let qt =0,at =0,rt=0,bt=0,kt=0,st=0,mt=0,lt=0;

const clock = new THREE.Clock();

//controls_here
// const controls = new OrbitControls(camera,renderer.domElement); 
const controls = new FirstPersonControls(camera,renderer.domElement);
controls.movementSpeed = 150;
controls.lookSpeed = 0.1;

// function to render.
function animation(){
    controls.update(clock.getDelta());
    cube.rotation.y += 0.01;
    cube_c.rotation.y += 0.01;

    qt += 0.03;
    at += 0.02;
    rt += 0.01;
    bt += 0.009;
    kt += 0.008;
    st += 0.007;
    mt += 0.006;
    lt += 0.005

         let qtsin = Math.sin(qt);        // it will increase
          let qtcos = Math.cos(qt);        // it will decrease
          let scalecos = 400*qtcos;
          let scalesin = 400*qtsin;
          
          let qtsina = Math.sin(at);        // it will increase
          let qtcosa = Math.cos(at);        // it will decrease
        
          let qtsinb = Math.sin(rt);        // it will increase
          let qtcosb = Math.cos(rt); 

          let qtsinc = Math.sin(bt);        // it will increase
          let qtcosc = Math.cos(bt); 

          let qtsind = Math.sin(kt);        // it will increase
          let qtcosd = Math.cos(kt); 

          let qtsine = Math.sin(st);        // it will increase
          let qtcose = Math.cos(st); 

          let qtsinf = Math.sin(mt);        // it will increase
          let qtcosf = Math.cos(mt); 

          let qtsing = Math.sin(lt);        // it will increase
          let qtcosg = Math.cos(lt); 

          cube_c.position.set(scalecos,0,scalesin);
        //   point.position.set(3700*qtcosg,0,3700*qtsing);
          cube_v.position.set(800*qtcosa,0,800*qtsina);
          cube_e.position.set(1200*qtcosb,0,1200*qtsinb);
          cube_m.position.set(1700*qtcosc,0,1700*qtsinc);
          cube_j.position.set(2200*qtcosd,0,2200*qtsind);
          cube_sa.position.set(2700*qtcose,0,2700*qtsine);
          cube_u.position.set(3100*qtcosf,0,3100*qtsinf);
          cube_n.position.set(3700*qtcosg,0,3700*qtsing);
        // cube_v.position.set(800,0,800);
        // cube_e.position.set(1700,0,1700);
        // cube_m.position.set(2800,0,2800);

    renderer.render(scene,camera);
    requestAnimationFrame(animation);
}
animation();

// here project is finished.

