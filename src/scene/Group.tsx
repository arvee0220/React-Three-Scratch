import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface GroupProps {
    position?: [number, number, number];
}

export default function Group({ position }: GroupProps) {
    const cubeRef = useRef<THREE.Mesh>(null);
    const planeRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        
        
        if (cubeRef.current) {
            cubeRef.current.rotation.y += delta;
        }

        if (planeRef.current) {
            planeRef.current.rotation.y += delta * 0.5;
        }
    });
    return (
        <group position={position}>
            <mesh position-x={-2} ref={planeRef}>
                <planeGeometry args={[2, 2]} />
                <meshBasicMaterial color="orange" side={2} />
            </mesh>
            <mesh position-x={2} ref={cubeRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="lightblue" />
            </mesh>
        </group>
    );
}
