// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/models/scene.gltf");

export default function PredatorModel() {

    // Method #1 using useLoader from @react-three/fiber
    // const predator = useLoader(GLTFLoader, "./models/scene.gltf");

    // Method #2 using useGLTF from @react-three/drei
    const predator = useGLTF("/models/scene.gltf");

    // Method #3 transform gltf models via https://gltf.pmnd.rs/    

    return (
        <>
            <ambientLight intensity={2} />
            <primitive object={predator.scene} position={[0, -1.5, 0]} />;
        </>
    );
}