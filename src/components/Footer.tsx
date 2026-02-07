"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 px-6 bg-[#020508] border-t border-white/5">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div
                    className="flex items-center gap-1 cursor-pointer transition-opacity hover:opacity-80"
                    onClick={scrollToTop}
                >
                    <span className="text-xl font-bold tracking-tighter text-[#00aaff]">TECNO</span>
                    <span className="text-xl font-bold tracking-tighter text-[#ffaa00]">PLAY</span>
                </div>

                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} TecnoPlay. Todos os direitos reservados.
                </p>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Termos de Uso</Link>
                    <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacidade</Link>
                </div>

                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#00aaff] transition-colors group"
                >
                    <span className="text-sm font-medium">Voltar ao topo</span>
                    <div className="p-2 rounded-full run-bg-white/5 group-hover:bg-[#00aaff]/10 transition-colors">
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                </button>
            </div>
        </footer>
    );
}
