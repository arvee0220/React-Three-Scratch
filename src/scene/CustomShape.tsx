import * as THREE from "three";

const Custom = () => {
    const customGeometry = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

    return (
        <mesh>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[customGeometry, 3]} count={3} itemSize={3} array={customGeometry} />
            </bufferGeometry>
            <meshBasicMaterial color="lightblue" side={THREE.DoubleSide} />
        </mesh>
    );
};

export default Custom;
