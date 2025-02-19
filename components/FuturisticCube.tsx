"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

const FuturisticCube = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = mountRef.current;
    if (!currentRef) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(200, 200)
    currentRef.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0x84cc16,
      wireframe: true,
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 2

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      if (currentRef) {
        currentRef.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="w-[200px] h-[200px]" />
}

export default FuturisticCube

