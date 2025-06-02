import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

export default function Particles() {
    const texture = useLoader(THREE.TextureLoader, "./textures/star.jpg");
    
    const pointRef = useRef<THREE.Points>(null);

    const verticesQuantity = 4000;

    const verticesArray = new Float32Array(verticesQuantity * 4);

    // random location of points
    for (let i = 0; i < verticesQuantity * 4; i++) {
        verticesArray[i] = (Math.random() - 0.5) * 10.0; // 10.0 is the particle spread or distance
    }

    useFrame((_, delta) => {
        if (pointRef.current) {
            pointRef.current.rotation.y += delta * 0.01;
            pointRef.current.rotation.x += delta * 0.01;
        }
    })

    return (
        <points ref={pointRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[verticesArray, 3]} count={verticesArray.length}/>
            </bufferGeometry>
            <pointsMaterial size={0.05} alphaMap={texture} transparent depthTest={false}/>
        </points>
    );
}
