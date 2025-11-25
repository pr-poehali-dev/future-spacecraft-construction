import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const SpaceShip = () => {
  const shipRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (shipRef.current) {
      shipRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={shipRef}>
        <mesh castShadow position={[0, 0, 0]}>
          <coneGeometry args={[0.8, 2.5, 6]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh castShadow position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.6, 0.8, 1.5, 6]} />
          <meshStandardMaterial color="#1e40af" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh castShadow position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.4, 0.6, 1, 6]} />
          <meshStandardMaterial color="#60a5fa" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, -2.2, 0]}>
          <coneGeometry args={[0.5, 0.8, 6]} />
          <meshStandardMaterial 
            color="#fbbf24" 
            emissive="#f59e0b"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
        <pointLight position={[0, -2.5, 0]} intensity={2} color="#fbbf24" distance={5} />
        <mesh position={[1.2, -0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.3, 1.5, 0.1]} />
          <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-1.2, -0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.3, 1.5, 0.1]} />
          <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.5, 1.2]} rotation={[Math.PI / 4, 0, 0]}>
          <boxGeometry args={[0.3, 1.5, 0.1]} />
          <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.5, -1.2]} rotation={[-Math.PI / 4, 0, 0]}>
          <boxGeometry args={[0.3, 1.5, 0.1]} />
          <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

const SpaceShip3D = () => {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden glow-card">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <SpaceShip />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default SpaceShip3D;
