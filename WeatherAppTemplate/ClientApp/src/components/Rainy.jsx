import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/rainy.glb')
    const { actions } = useAnimations(animations, group)
    useEffect(() => {
        actions.CurveAction.play();
        actions.Roundcube8.play();
        actions.Roundcube9.play();
        actions.Roundcube10.play();
        actions.Roundcube11.play();
        actions.Roundcube12.play();
    })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[-0.661, 0.447, -1.446]} rotation={[0, 0, -Math.PI / 6]} />
        <group name="Empty001" position={[-0.661, 0.447, -1.446]} />
        <group name="Empty003" position={[-0.661, 0.447, -1.446]} rotation={[0, 0, Math.PI / 3]} />
        <group name="Empty004" position={[-0.661, 0.447, -1.446]} rotation={[0, 0, Math.PI / 2]} />
        <group name="Empty005" position={[-0.661, 0.447, -1.446]} rotation={[0, 0, 2.094]} />
        <group name="Empty006" position={[0.023, -0.889, 0.001]} scale={1.386}>
          <mesh name="Roundcube008" geometry={nodes.Roundcube008.geometry} material={materials['Material.004']} position={[-0.001, 0.08, 0]} rotation={[0, 0, -Math.PI / 6]} scale={0.042} />
          <mesh name="Roundcube009" geometry={nodes.Roundcube009.geometry} material={materials['Material.004']} position={[0.276, 0.08, 0]} rotation={[0, 0, -Math.PI / 6]} scale={0.042} />
          <mesh name="Roundcube010" geometry={nodes.Roundcube010.geometry} material={materials['Material.004']} position={[-0.271, 0.08, 0]} rotation={[0, 0, -Math.PI / 6]} scale={0.042} />
          <mesh name="Roundcube011" geometry={nodes.Roundcube011.geometry} material={materials['Material.004']} position={[-0.143, -0.122, 0]} rotation={[0, 0, -Math.PI / 6]} scale={0.042} />
          <mesh name="Roundcube012" geometry={nodes.Roundcube012.geometry} material={materials['Material.004']} position={[0.138, -0.119, 0]} rotation={[0, 0, -Math.PI / 6]} scale={0.042} />
        </group>
        <mesh name="Curve" geometry={nodes.Curve.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, -0.016, 0]} scale={0.955} />
      </group>
    </group>
  )
}

useGLTF.preload('/rainy.glb')
