"use client";

import { useState, useEffect } from "react";

export function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 300);
                    return 100;
                }
                // Velocidade variável para parecer mais natural
                const increment = prev < 70 ? Math.random() * 8 + 3 : Math.random() * 3 + 1;
                return Math.min(prev + increment, 100);
            });
        }, 80);

        return () => clearInterval(interval);
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`fixed inset-0 z-[9999] bg-[#050a12] flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
            {/* Logo */}
            <div className="mb-8 flex items-center gap-1">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-[#00aaff]">TECNO</span>
                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-[#ffaa00]">PLAY</span>
            </div>

            {/* Barra de Progresso */}
            <div className="w-64 md:w-80 h-1 rounded-full bg-white/10 overflow-hidden backdrop-blur-sm">
                <div
                    className="h-full rounded-full transition-all duration-150 ease-out"
                    style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #00aaff 0%, #ffaa00 100%)'
                    }}
                />
            </div>

            {/* Porcentagem */}
            <div className="mt-4 text-gray-400 font-medium">
                <span className="text-white">{Math.round(progress)}</span>%
            </div>

            {/* Texto de carregamento */}
            <p className="mt-2 text-gray-500 text-sm tracking-wider uppercase">Carregando...</p>

            {/* Efeito de brilho animado */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00aaff]/5 rounded-full blur-[80px] animate-pulse pointer-events-none" />
        </div>
    );
}
