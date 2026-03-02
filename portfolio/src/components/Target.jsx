import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Lightweight local target built from primitives to avoid external model fetch failures.
const Target = (props) => {
    const targetRef = useRef();

    useGSAP(() => {
        if (!targetRef.current) return;

        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    }, []);

    return (
        <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.1}>
            <mesh position={[0, -1.2, 0]}>
                <cylinderGeometry args={[0.22, 0.26, 2.2, 32]} />
                <meshStandardMaterial color="#8b96a8" metalness={0.55} roughness={0.35} />
            </mesh>
            <mesh position={[0, 0.35, 0]}>
                <torusGeometry args={[0.8, 0.12, 24, 96]} />
                <meshStandardMaterial color="#ef4444" metalness={0.2} roughness={0.5} />
            </mesh>
            <mesh position={[0, 0.35, 0]}>
                <torusGeometry args={[0.45, 0.1, 24, 96]} />
                <meshStandardMaterial color="#f8fafc" metalness={0.08} roughness={0.55} />
            </mesh>
            <mesh position={[0, 0.35, 0]}>
                <circleGeometry args={[0.2, 48]} />
                <meshStandardMaterial color="#ef4444" metalness={0.1} roughness={0.6} />
            </mesh>
        </group>
    );
};

export default Target;
