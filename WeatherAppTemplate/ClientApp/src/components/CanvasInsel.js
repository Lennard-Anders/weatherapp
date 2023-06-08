import React, { Component, Suspense } from 'react';
import styled from "styled-components";
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import Insel from "./Insel";
import { Earth } from "./Earth/index";
import { TopSection } from "./TopSection/index";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;


export default function CanvasInsel() {
    return (
        <CanvasContainer>
            <TopSection />
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    )
};