import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
    const loader = useProgress();

    const fixedProgress = Math.round(loader.progress);    

    return <Html center>{fixedProgress}% Loaded</Html>;
}
