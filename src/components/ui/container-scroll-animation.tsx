"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
    titleComponent,
    children,
}: {
    titleComponent: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

    return (
        <div
            className="py-20 md:py-32 flex items-center justify-center relative px-4 md:px-20"
            ref={containerRef}
        >
            <div
                className="w-full relative"
                style={{
                    perspective: "none",
                }}
            >
                <Header translateY={translateY} titleComponent={titleComponent} />
                <Card scale={scale} opacity={opacity}>
                    {children}
                </Card>
            </div>
        </div>
    );
};


const Header = ({ translateY, titleComponent }: { translateY: MotionValue<number>; titleComponent: React.ReactNode }) => {
    return (
        <motion.div
            style={{
                y: translateY,
            }}
            className="max-w-5xl mx-auto text-center mb-10"
        >
            {titleComponent}
        </motion.div>
    );
};

const Card = ({
    scale,
    opacity,
    children,
}: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                scale,
                opacity,
            }}
            className="max-w-5xl mx-auto aspect-video w-full border-2 border-[#00aaff]/30 p-2 md:p-4 bg-[#0a1628] rounded-2xl md:rounded-3xl shadow-[0_0_60px_rgba(0,170,255,0.2)] WillChangeTransform"
        >
            <div className="h-full w-full overflow-hidden rounded-xl md:rounded-2xl bg-[#050a12]">
                {children}
            </div>
        </motion.div>
    );
};

