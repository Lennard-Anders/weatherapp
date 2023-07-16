import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cloudy.glb')
    const { actions } = useAnimations(animations, group)
    useEffect(() => {
        actions.CurveAction.play();
    })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[-0.661, 0.447, -1.446]} rotation={[0, 0, -Math.PI / 6]} />
        <group name="Empty001" position={[-0.661, 0.447, -1.446]} />
        <group name="Empty002" position={[-0.661, 0.447, -1.446]} rotation={[0, 0, Math.PI / 6]} />
        <group name="Empty003" position={[-0.661, 0.447, -1.446]} rotation={[0, 0, Math.PI / 3]} />
        <group name="Empty004" position={[-0.661, 0.447, -1.446]} rotation={[0, 0, Math.PI / 2]} />
        <group name="Empty005" position={[-0.661, 0.447, -1.446]} rotation={[0, 0, 2.094]} />
        <group name="Empty006" position={[0.023, -0.889, 0.001]} scale={1.386} />
        <mesh name="Curve" geometry={nodes.Curve.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, -0.016, 0]} scale={0.955} />
      </group>
    </group>
  )
}

useGLTF.preload('/cloudy.glb')
