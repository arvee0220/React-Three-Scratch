import * as THREE from "three";
import { useRef, type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

useGLTF.preload("/models/bike.gltf");

type GLTFResult = GLTF & {
    nodes: {
        Bike: THREE.Mesh;
        Cube: THREE.Mesh;
        Cylinder002_1: THREE.Mesh;
        Cylinder002_2: THREE.Mesh;
        Cylinder006: THREE.Mesh;
        Cylinder006_1: THREE.Mesh;
        Torus003: THREE.Mesh;
        Torus003_1: THREE.Mesh;
        Torus003_2: THREE.Mesh;
        Cylinder004: THREE.Mesh;
        Cylinder004_1: THREE.Mesh;
        CaboFreioFrente: THREE.Mesh;
        Cylinder001: THREE.Mesh;
        Cylinder005: THREE.Mesh;
        Cylinder005_1: THREE.Mesh;
        Cylinder011: THREE.Mesh;
        Cylinder011_1: THREE.Mesh;
        Cylinder_1: THREE.Mesh;
        Cylinder_2: THREE.Mesh;
        NurbsCurve: THREE.Mesh;
        Sphere002: THREE.Mesh;
        Torus002: THREE.Mesh;
        Torus002_1: THREE.Mesh;
        Torus002_2: THREE.Mesh;
        Cylinder010: THREE.Mesh;
        Cylinder010_1: THREE.Mesh;
        Cylinder007: THREE.Mesh;
        Cylinder007_1: THREE.Mesh;
        Cylinder008: THREE.Mesh;
        Cylinder008_1: THREE.Mesh;
        Sphere: THREE.Mesh;
        B_Raios: THREE.Mesh;
        F_Raios: THREE.Mesh;
    };
    materials: {
        Quadro: THREE.MeshStandardMaterial;
        Pneu: THREE.MeshStandardMaterial;
        Eixo: THREE.MeshStandardMaterial;
        Roda: THREE.MeshStandardMaterial;
        Faixa: THREE.MeshStandardMaterial;
        PedalInterno: THREE.MeshStandardMaterial;
        PedalExterno: THREE.MeshStandardMaterial;
        Raio: THREE.MeshStandardMaterial;
    };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials } = useGLTF("/models/bike.gltf") as unknown as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Bike.geometry} material={nodes.Bike.material}>
                <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-0.06, 0.32, 0]} scale={0.09} />
                <group position={[-1.05, -1.18, 0]}>
                    <mesh geometry={nodes.Cylinder002_1.geometry} material={nodes.Cylinder002_1.material} />
                    <mesh geometry={nodes.Cylinder002_2.geometry} material={nodes.Cylinder002_2.material} />
                </group>
                <group position={[-0.43, -0.32, 0.01]} rotation={[1.57, -1.41, 3.14]} scale={[1, 3.02, 1]}>
                    <mesh geometry={nodes.Cylinder006.geometry} material={nodes.Cylinder006.material} />
                    <mesh geometry={nodes.Cylinder006_1.geometry} material={nodes.Cylinder006_1.material} />
                </group>
                <group position={[-1.05, -1.18, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.79, 0.55, 0.79]}>
                    <mesh geometry={nodes.Torus003.geometry} material={nodes.Torus003.material} />
                    <mesh geometry={nodes.Torus003_1.geometry} material={nodes.Torus003_1.material} />
                    <mesh geometry={nodes.Torus003_2.geometry} material={nodes.Torus003_2.material} />
                </group>
                <group position={[1.73, -0.42, 0.13]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 3.02, 1]}>
                    <mesh geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material} />
                    <mesh geometry={nodes.Cylinder004_1.geometry} material={nodes.Cylinder004_1.material} />
                </group>
                <mesh geometry={nodes.CaboFreioFrente.geometry} material={nodes.CaboFreioFrente.material} position={[1.68, -0.25, -0.15]} />
                <mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} position={[-1.03, -1.18, 0.16]} scale={0.5} />
                <group position={[0.27, -1.17, 0.01]}>
                    <mesh geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} />
                    <mesh geometry={nodes.Cylinder005_1.geometry} material={materials.PedalExterno} />
                </group>
                <group position={[1.31, 0.35, 0.01]} rotation={[Math.PI / 2, 0, 0]} scale={0.37}>
                    <mesh geometry={nodes.Cylinder011.geometry} material={nodes.Cylinder011.material} />
                    <mesh geometry={nodes.Cylinder011_1.geometry} material={nodes.Cylinder011_1.material} />
                </group>
                <group position={[1.9, -1.18, 0]}>
                    <mesh geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} />
                    <mesh geometry={nodes.Cylinder_2.geometry} material={nodes.Cylinder_2.material} />
                </group>
                <mesh geometry={nodes.NurbsCurve.geometry} material={nodes.NurbsCurve.material} position={[0.43, -0.8, 0.09]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[1.68, -0.25, -0.19]} scale={0.01} />
                <group position={[1.9, -1.18, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.79, 0.55, 0.79]}>
                    <mesh geometry={nodes.Torus002.geometry} material={nodes.Torus002.material} />
                    <mesh geometry={nodes.Torus002_1.geometry} material={nodes.Torus002_1.material} />
                    <mesh geometry={nodes.Torus002_2.geometry} material={nodes.Torus002_2.material} />
                </group>
                <group position={[0.29, -0.97, 0.15]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.13, 0.21]}>
                    <mesh geometry={nodes.Cylinder010.geometry} material={nodes.Cylinder010.material} />
                    <mesh geometry={nodes.Cylinder010_1.geometry} material={nodes.Cylinder010_1.material} />
                </group>
                <group position={[0.27, -1.53, -0.49]} scale={[3.42, 3.28, 10.4]}>
                    <mesh geometry={nodes.Cylinder007.geometry} material={nodes.Cylinder007.material} />
                    <mesh geometry={nodes.Cylinder007_1.geometry} material={nodes.Cylinder007_1.material} />
                </group>
                <group position={[0.27, -0.81, 0.52]} scale={[3.42, 3.28, 10.4]}>
                    <mesh geometry={nodes.Cylinder008.geometry} material={nodes.Cylinder008.material} />
                    <mesh geometry={nodes.Cylinder008_1.geometry} material={nodes.Cylinder008_1.material} />
                </group>
                <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[-0.38, -0.26, 0.18]} scale={0.01} />
                <mesh geometry={nodes.B_Raios.geometry} material={nodes.B_Raios.material} position={[-1.05, -1.18, 0]} />
                <mesh geometry={nodes.F_Raios.geometry} material={nodes.F_Raios.material} position={[1.9, -1.18, 0]} />
            </mesh>
        </group>
    );
}


