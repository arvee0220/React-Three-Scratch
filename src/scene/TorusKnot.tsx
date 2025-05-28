export default function TorusKnot() {
    return (
        <>
            <mesh>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
            <mesh position={[5, 0, 0]}>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    );
}
