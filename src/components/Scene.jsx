import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef } from 'react'

function Sculpture() {
  const group = useRef()
  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.105
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
  })
  return <group ref={group}>
    <Float speed={1.05} rotationIntensity={0.18} floatIntensity={0.38}>
      <mesh rotation={[0.28, 0.15, 0.12]}>
        <torusKnotGeometry args={[1.05, 0.255, 260, 36, 2, 5]} />
        <MeshTransmissionMaterial backside samples={8} resolution={512} thickness={0.8} roughness={0.12} chromaticAberration={0.025} anisotropy={0.25} color="#f4f3ef" />
      </mesh>
      <mesh scale={0.28} position={[1.52, 0.5, -0.55]} rotation={[0.3,0.5,0.1]}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color="#d8d7d2" metalness={1} roughness={0.16} />
      </mesh>
      <mesh scale={0.17} position={[-1.55, -0.75, 0.45]} rotation={[0.2,0.3,0.1]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#fffefa" metalness={0.95} roughness={0.1} />
      </mesh>
    </Float>
  </group>
}

export default function Scene() {
  return <Canvas camera={{ position: [0, 0, 5.2], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={0.55} />
    <spotLight position={[4, 5, 5]} intensity={95} angle={0.34} penumbra={1} color="#fffefa" />
    <pointLight position={[-4, -2, -3]} intensity={30} color="#bdbcb7" />
    <pointLight position={[1, 2, 4]} intensity={18} color="#ffffff" />
    <Sculpture />
    <Environment preset="studio" />
    <ContactShadows position={[0, -2, 0]} opacity={0.24} scale={6} blur={2.5} far={4} />
  </Canvas>
}
