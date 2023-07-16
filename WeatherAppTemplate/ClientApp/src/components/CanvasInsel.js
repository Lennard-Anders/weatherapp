import React, { Component, Suspense } from 'react';
import styled from "styled-components";
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Earth } from "./Earth/index";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;


export default function CanvasInsel() {
    return (
        <CanvasContainer>
            <Canvas>
                <OrbitControls />
                <directionalLight intensity={0.5} />
                <ambientLight intensity={0.2} />
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    )
};