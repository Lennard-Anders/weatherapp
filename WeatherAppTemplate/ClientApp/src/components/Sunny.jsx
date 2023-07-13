import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/sunny.glb')
    const { actions } = useAnimations(animations, group)
    useEffect(() => {
        actions.CurveAction.play();
        actions.Roundcube1.play();
        actions.Roundcube2.play();
        actions.Roundcube3.play();
        actions.Roundcube4.play();
        actions.Roundcube5.play();
        actions.Roundcube6.play();
    })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Roundcube002" geometry={nodes.Roundcube002.geometry} material={materials['Material.003']} position={[-0.661, 0.447, -0.608]} rotation={[0, 0, Math.PI / 2]} scale={0.564}>
          <group name="Empty" rotation={[0, 0, -Math.PI / 6]} scale={1.773}>
            <mesh name="Roundcube003" geometry={nodes.Roundcube003.geometry} material={materials['Material.003']} position={[0, 0.279, -0.342]} scale={0.139} />
          </group>
          <group name="Empty001" scale={1.773}>
            <mesh name="Roundcube001" geometry={nodes.Roundcube001.geometry} material={materials['Material.003']} position={[0, 0.279, -0.342]} scale={0.139} />
          </group>
          <group name="Empty002" rotation={[0, 0, Math.PI / 6]} scale={1.773}>
            <mesh name="Roundcube004" geometry={nodes.Roundcube004.geometry} material={materials['Material.003']} position={[0, 0.279, -0.342]} rotation={[0, 0, Math.PI / 6]} scale={0.139} />
          </group>
          <group name="Empty003" rotation={[0, 0, Math.PI / 3]} scale={1.773}>
            <mesh name="Roundcube005" geometry={nodes.Roundcube005.geometry} material={materials['Material.003']} position={[0, 0.279, -0.342]} rotation={[0, 0, Math.PI / 3]} scale={0.139} />
          </group>
          <group name="Empty004" rotation={[0, 0, Math.PI / 2]} scale={1.773}>
            <mesh name="Roundcube006" geometry={nodes.Roundcube006.geometry} material={materials['Material.003']} position={[0, 0.279, -0.342]} rotation={[0, 0, Math.PI / 2]} scale={0.139} />
          </group>
        </mesh>
        <mesh name="Curve" geometry={nodes.Curve.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, -0.016, 0]} scale={0.955} />
      </group>
    </group>
  )
}

useGLTF.preload('/sunny.glb')
