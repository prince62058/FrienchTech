import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground({ className = "" }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      // Orange/Blue color scheme
      const colorChoice = Math.random();
      if (colorChoice > 0.5) {
        colors[i] = 1.0; // R
        colors[i + 1] = 0.6; // G
        colors[i + 2] = 0.2; // B (Orange)
      } else {
        colors[i] = 0.3; // R
        colors[i + 1] = 0.6; // G
        colors[i + 2] = 1.0; // B (Blue)
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.6, 8),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff9900, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0x4d9eff, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.2 }),
    ];

    const meshes = [];
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      // Animate geometric shapes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01 + index * 0.001;
        mesh.rotation.y += 0.01 + index * 0.001;
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        mesh.position.x += Math.cos(Date.now() * 0.001 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      // Dispose geometries and materials
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}