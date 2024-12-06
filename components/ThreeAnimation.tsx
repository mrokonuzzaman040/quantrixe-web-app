'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Text } from '@react-three/drei'
import * as THREE from 'three'

// Particles Component
function Particles({ count = 5000 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (points.current) {
      const positionArray = points.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positionArray[i3] += Math.sin(time + i * 0.1) * 0.01
        positionArray[i3 + 1] += Math.cos(time + i * 0.1) * 0.01
        positionArray[i3 + 2] += Math.sin(time + i * 0.1) * 0.01
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#4287f5" sizeAttenuation transparent />
    </points>
  )
}

// Animated Sphere Component
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4)
      meshRef.current.rotation.y = Math.sin(time / 2)
    }
  })

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <meshStandardMaterial color="#4287f5" wireframe />
    </Sphere>
  )
}

// Floating Cube Component
function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(time) * 0.5
      meshRef.current.rotation.x = time * 0.5
      meshRef.current.rotation.y = time * 0.3
    }
  })

  return (
    <Box args={[1, 1, 1]} ref={meshRef}>
      <meshStandardMaterial color="#4287f5" wireframe />
    </Box>
  )
}

// Web3 Text Component
function Web3Text() {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (textRef.current) {
      textRef.current.position.y = Math.sin(time) * 0.5
      textRef.current.rotation.y = Math.sin(time * 0.5) * 0.5
    }
  })

  return (
    <Text
      ref={textRef}
      color="#4287f5"
      fontSize={0.5}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign="center"
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
    >
      Web3
    </Text>
  )
}

// Main ThreeAnimation Component
export default function ThreeAnimation({ type = 'default' }: { type?: string }) {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {type === 'default' && (
          <>
            <AnimatedSphere />
            <Particles />
          </>
        )}
        {type === 'cube' && <FloatingCube />}
        {type === 'web3' && <Web3Text />}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
