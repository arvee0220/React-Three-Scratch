import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
// import Group from "./scene/Group";
// import Custom from "./scene/CustomShape";
import Particles from "./scene/Particles";
import PredatorModel from "./scene/PredatorModel";
import { Suspense } from "react";
import Loader from "./loader/Loader";
import { Perf } from "r3f-perf";

export default function App() {
    const canvasHandler = (state: { gl: THREE.WebGLRenderer }) => {
        console.log("Canvas state:", Object.keys(state.gl));
        state.gl.setClearColor("black", 0.2);
    };

    return (
        <Canvas className="canvas" /* gl={{ alpha: true }} */ camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 100 }} onCreated={canvasHandler}>
            <Perf position="top-left"/>
            <OrbitControls />
            {/* <Group /> */}
            {/* <Custom/> */}
            <Particles />
            <Suspense fallback={<Loader />}>
                <PredatorModel />
            </Suspense>
        </Canvas>
    );
}
