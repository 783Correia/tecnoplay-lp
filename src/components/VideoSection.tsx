"use client";

import { ScrollReveal } from "./scroll-reveal";

export function VideoSection() {
    return (
        <section id="video" className="bg-[#050a12] py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <ScrollReveal width="100%" className="flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
                        Conheça agora nosso{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] to-[#ffaa00]">
                            aplicativo!
                        </span>
                    </h2>

                    <div className="relative w-full aspect-video max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,170,255,0.1)] mb-12 group">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/zOj5_-MBkSw"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        {/* Glow effect only, no heavy 3D transforms */}
                        <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
                    </div>

                    <p className="text-gray-400 max-w-2xl text-center text-lg">
                        Veja como é simples e intuitivo navegar pelo TecnoPlay. A melhor experiência de streaming espera por você.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}




