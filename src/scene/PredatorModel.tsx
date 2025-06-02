// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/models/scene.gltf");

export default function PredatorModel() {
    // const predator = useLoader(GLTFLoader, "./models/scene.gltf");
    const predator = useGLTF("/models/scene.gltf");

    console.log("Model", predator);

    return (
        <>
            <ambientLight intensity={2} />
            <primitive object={predator.scene} position={[0, -1.5, 0]} />;
        </>
    );
}