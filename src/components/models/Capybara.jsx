import React from 'react'
import { useGLTF } from '@react-three/drei'
import { motion } from "framer-motion-3d";

export default function Capybara(props) {
  const { nodes, materials } = useGLTF('/capybara.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.221}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <motion.mesh geometry={nodes.Capybara_mesh_Capybara_mat_0.geometry} material={materials.Capybara_mat} position={[-0.43, 0.356, -0.085]} rotation={[-0.491, 1.299, 0.495]} scale={1300} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/capybara.glb')
