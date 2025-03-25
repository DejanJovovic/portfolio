import React, {useRef} from 'react'
import {useGLTF} from "@react-three/drei";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

// rendering 3d model from scratch, mesh from scratch
const Target = (props) => {

    const targetRef = useRef();
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(() => {
       gsap.to(targetRef.current.position, {
          // move it 0.5 above
           y: targetRef.current.position.y + 0.5,
           duration: 1.5,
           repeat: -1,
           // goes up and down
           yoyo: true,
       })
    });

    return (
        // spreads out all the props
        <mesh {... props} ref={targetRef} rotation={[0, Math.PI /5, 0]} scale={1.1}>
            <primitive object={scene}/>
        </mesh>
    )
}
export default Target
