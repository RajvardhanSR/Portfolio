import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FallbackCanvas } from './FallbackCanvas';

export const NeuralScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const primaryLight = new THREE.PointLight(0x38bdf8, 3.5, 30);
    primaryLight.position.set(5, 5, 8);
    scene.add(primaryLight);

    const secondaryLight = new THREE.PointLight(0x818cf8, 2.5, 30);
    secondaryLight.position.set(-5, -4, 6);
    scene.add(secondaryLight);

    // CENTRAL AI CORE (Geometric Glass Cage + Core Glow)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing sphere
    const innerCoreGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCore);

    // Outer crystalline polyhedron wireframe cage
    const outerCoreGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const outerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      emissive: 0x4338ca,
      emissiveIntensity: 0.3,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    });
    const outerCore = new THREE.Mesh(outerCoreGeo, outerCoreMat);
    coreGroup.add(outerCore);

    // Floating Ring
    const ringGeo = new THREE.TorusGeometry(3.0, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    coreGroup.add(ring);

    // 3D NEURAL NODES & CONNECTIONS
    const nodeCount = 55;
    const nodePositions: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];
    const spread = 12;

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * spread * 1.5,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread * 0.8
      );
      nodePositions.push(pos);
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003
        )
      );
    }

    // Instanced Mesh for Nodes
    const sphereGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.8,
    });
    const nodeMesh = new THREE.InstancedMesh(sphereGeo, sphereMat, nodeCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < nodeCount; i++) {
      dummy.position.copy(nodePositions[i]);
      const s = 0.6 + Math.random() * 0.7;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      nodeMesh.setMatrixAt(i, dummy.matrix);
    }
    nodeMesh.instanceMatrix.needsUpdate = true;
    scene.add(nodeMesh);

    // Dynamic Connections LineSegments
    const maxConnections = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineSegments);

    // Ambient floating dust particles
    const dustCount = 120;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 26;
      dustPos[i + 1] = (Math.random() - 0.5) * 20;
      dustPos[i + 2] = (Math.random() - 0.5) * 16;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));

    const dustMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.06,
      transparent: true,
      opacity: 0.45,
    });
    const dustParticles = new THREE.Points(dustGeo, dustMat);
    scene.add(dustParticles);

    // INTERACTION: Mouse Parallax + Scroll Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Scroll progress
      const scrollNorm = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight || 1), 1);

      // Rotate central core
      coreGroup.rotation.y = elapsedTime * 0.15 + mouseX * 0.5;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2 - mouseY * 0.3;
      ring.rotation.z = elapsedTime * 0.1;

      // Camera motion influenced by scroll + mouse
      camera.position.x = mouseX * 2.2;
      camera.position.y = -mouseY * 1.8 + scrollNorm * 2.5;
      camera.position.z = 18 - scrollNorm * 6;
      camera.lookAt(0, 0, 0);

      // Core scale breathing
      const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.04;
      innerCore.scale.set(pulse, pulse, pulse);

      // Update nodes and connections
      let lineIndex = 0;
      const colorCyan = new THREE.Color(0x38bdf8);
      const colorViolet = new THREE.Color(0x818cf8);

      for (let i = 0; i < nodeCount; i++) {
        const p = nodePositions[i];
        const v = nodeVelocities[i];
        p.add(v);

        // Boundary bounce
        if (Math.abs(p.x) > spread * 0.8) v.x *= -1;
        if (Math.abs(p.y) > spread * 0.5) v.y *= -1;
        if (Math.abs(p.z) > spread * 0.4) v.z *= -1;

        dummy.position.copy(p);
        dummy.updateMatrix();
        nodeMesh.setMatrixAt(i, dummy.matrix);

        // Connect nearby nodes
        for (let j = i + 1; j < nodeCount; j++) {
          const p2 = nodePositions[j];
          const dist = p.distanceTo(p2);

          if (dist < 3.8) {
            linePositions[lineIndex * 6] = p.x;
            linePositions[lineIndex * 6 + 1] = p.y;
            linePositions[lineIndex * 6 + 2] = p.z;

            linePositions[lineIndex * 6 + 3] = p2.x;
            linePositions[lineIndex * 6 + 4] = p2.y;
            linePositions[lineIndex * 6 + 5] = p2.z;

            const t = dist / 3.8;
            const c = colorCyan.clone().lerp(colorViolet, t);

            lineColors[lineIndex * 6] = c.r;
            lineColors[lineIndex * 6 + 1] = c.g;
            lineColors[lineIndex * 6 + 2] = c.b;

            lineColors[lineIndex * 6 + 3] = c.r;
            lineColors[lineIndex * 6 + 4] = c.g;
            lineColors[lineIndex * 6 + 5] = c.b;

            lineIndex++;
          }
        }
      }

      nodeMesh.instanceMatrix.needsUpdate = true;
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIndex * 2);

      // Rotate dust particles slowly
      dustParticles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      outerCoreGeo.dispose();
      outerCoreMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!hasWebGL) {
    return <FallbackCanvas />;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
