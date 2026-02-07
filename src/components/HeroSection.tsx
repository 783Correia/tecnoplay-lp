import { Header } from "./Header";
import { Button } from "./ui/Button";
import { Play, Tv, Smartphone, Cast, Monitor } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050a12] pt-20">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00aaff]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#ffaa00]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <Header />

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto mt-10 md:mt-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00aaff] text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse" />
                    O Único Aplicativo Híbrido do Brasil
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                    ASSISTA TUDO EM <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] to-[#006699]">ALTA DEFINIÇÃO</span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                    Tenha acesso a mais de 300 mil conteúdos, entre filmes, séries, novelas e canais ao vivo. Tudo isso sem travamentos e com suporte garantido.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
                    <Button variant="primary" size="lg" className="h-16 px-8 text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(255,170,0,0.4)]">
                        <Play className="mr-2 fill-current" size={20} />
                        PRA ACESSAR É MUITO FÁCIL
                    </Button>
                    <Button variant="outline" size="lg" className="h-16 px-8 text-lg w-full sm:w-auto">
                        FALAR NO WHATSAPP
                    </Button>
                </div>

                {/* Social Proof / Brands */}
                <div className="w-full max-w-4xl border-t border-white/10 pt-10">
                    <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-widest">Compatível com todos os dispositivos</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using Lucide Icons as placeholders for device compatibility which is stronger than brands usually */}
                        <div className="flex flex-col items-center gap-2">
                            <Tv size={32} className="text-white" />
                            <span className="text-xs text-white">Smart TV</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Cast size={32} className="text-white" />
                            <span className="text-xs text-white">TV Box</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Smartphone size={32} className="text-white" />
                            <span className="text-xs text-white">Celular</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Monitor size={32} className="text-white" />
                            <span className="text-xs text-white">Computador</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
