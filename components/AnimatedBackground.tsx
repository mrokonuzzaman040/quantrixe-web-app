"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    currentRef.appendChild(renderer.domElement)

    const geometry = new THREE.IcosahedronGeometry(1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x84cc16, wireframe: true, transparent: true, opacity: 0.3 })
    const icosahedron = new THREE.Mesh(geometry, material)
    scene.add(icosahedron)

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 5000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0x84cc16 })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 3

    const animate = () => {
      requestAnimationFrame(animate)
      icosahedron.rotation.x += 0.001
      icosahedron.rotation.y += 0.001
      particlesMesh.rotation.y += 0.0005
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (currentRef) {
        currentRef.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />
}

export default AnimatedBackground

