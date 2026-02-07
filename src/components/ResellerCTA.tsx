import { Button } from "./ui/Button";
import { DollarSign } from "lucide-react";

export function ResellerCTA() {
    return (
        <section id="revenda" className="py-24 px-4 md:px-6 bg-gradient-to-b from-[#002244] to-[#050a12] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00aaff]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <div className="inline-block p-3 rounded-full bg-[#ffaa00]/10 mb-6">
                    <DollarSign size={48} className="text-[#ffaa00]" />
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                    Seja um <span className="text-[#ffaa00]">Revendedor</span> TecnoPlay
                </h2>

                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                    Tenha seu próprio negócio com baixo investimento e alta lucratividade. Ofereça o melhor serviço de IPTV do mercado para seus clientes.
                </p>

                <a href="https://wa.me/5554999335331?text=Olá! Tenho interesse em me tornar revendedor TecnoPlay." target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="h-14 px-10 text-lg shadow-[0_0_30px_rgba(255,170,0,0.3)]">
                        QUERO LUCRAR AGORA
                    </Button>
                </a>
            </div>
        </section>
    );
}
