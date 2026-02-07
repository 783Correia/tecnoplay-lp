'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        particles: THREE.Points[];
        animationId: number;
        count: number;
    } | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const SEPARATION = 100;
        const AMOUNTX = 30; // Reduced from 50
        const AMOUNTY = 30; // Reduced from 50

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;
        camera.position.y = 500;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        const particles = new Float32Array(AMOUNTX * AMOUNTY * 3);
        const colors = new Float32Array(AMOUNTX * AMOUNTY * 3);

        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                particles[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
                particles[i + 1] = 0; // y
                particles[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z

                // Colors: Cyan/Blue gradient
                colors[i] = 0;     // R
                colors[i + 1] = 0.5 + Math.random() * 0.5; // G
                colors[i + 2] = 1;     // B

                i += 3;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
        // Removed color attribute for performance


        const material = new THREE.PointsMaterial({
            size: 3,
            color: 0x00aaff,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.6,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let count = 0;
        const animate = () => {
            if (!containerRef.current) return; // Stop if unmounted

            const positions = points.geometry.attributes.position.array as Float32Array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    // Update Y
                    positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                    i += 3;
                }
            }

            points.geometry.attributes.position.needsUpdate = true;

            // Rotate entire system slightly
            points.rotation.y += 0.002;

            renderer.render(scene, camera);
            count += 0.1;

            sceneRef.current = { ...sceneRef.current!, animationId: requestAnimationFrame(animate) };
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (sceneRef.current?.animationId) {
                cancelAnimationFrame(sceneRef.current.animationId);
            }
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);




    return (
        <div
            ref={containerRef}
            className={cn('pointer-events-none absolute inset-0', className)}
            {...props}
        />
    );
}

