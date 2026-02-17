'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import type { Mesh } from 'three'

export function HeroScene() {
  const meshRef = useRef<Mesh>(null)
  const wireRef = useRef<Mesh>(null)
  const { pointer } = useThree()

  useFrame((_, delta) => {
    if (!meshRef.current || !wireRef.current) return
    meshRef.current.rotation.y += delta * 0.08
    meshRef.current.rotation.x += delta * 0.04
    wireRef.current.rotation.y = meshRef.current.rotation.y
    wireRef.current.rotation.x = meshRef.current.rotation.x
    meshRef.current.rotation.z += (pointer.x * 0.2 - meshRef.current.rotation.z) * 0.02
    wireRef.current.rotation.z = meshRef.current.rotation.z
  })

  return (
    <>
      <ambientLight intensity={0.08} />
      <spotLight position={[5, 5, 5]} color="#10b981" intensity={1.0} angle={0.5} />
      <pointLight position={[-4, 2, 3]} color="#14b8a6" intensity={0.4} />
      <directionalLight position={[0, 3, 5]} intensity={0.2} />

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <group position={[1.5, 0, 0]}>
          <mesh ref={meshRef}>
            <sphereGeometry args={[2, 64, 64]} />
            <MeshDistortMaterial
              color="#0a2e1f"
              metalness={0.8}
              roughness={0.2}
              distort={0.3}
              speed={1.5}
            />
          </mesh>
          <mesh ref={wireRef}>
            <sphereGeometry args={[2.05, 32, 32]} />
            <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.08} />
          </mesh>
        </group>
      </Float>
    </>
  )
}
