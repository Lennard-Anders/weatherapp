import React, { Component, Suspense } from 'react';
import styled from "styled-components";
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import Sunny from "./Sunny.jsx";

const CanvasContainer = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;

  @media only screen and (max-width: 1400px) {
    width: 400px;
    height: 400px;
 }
`;


export default function CanvasSunny() {
    return (
        <CanvasContainer>
            <Canvas
                camera={{ position: [0, 0, 15], fov: 30 }}>
                <OrbitControls />
                <directionalLight intensity={0.3} />
                <ambientLight intensity={0.6} />
                <Suspense fallback={null}>
                    <Sunny />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    )
};