import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Group from "./scene/Group";
import * as THREE from "three";
import Custom from "./scene/CustomShape";

export default function App() {
    const canvasHandler = (state: { gl: THREE.WebGLRenderer }) => {
        console.log("Canvas state:", Object.keys(state.gl));
        state.gl.setClearColor("cyan", 0.2);
    };

    return (
        <Canvas className="canvas" gl={{ alpha: true }} camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 100 }} onCreated={canvasHandler}>
            <OrbitControls />
            <Group />
            <Custom/>
        </Canvas>
    );
}
