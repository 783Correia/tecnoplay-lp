import { Film, Tv, Wifi, ShieldCheck as Shield } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const benefits = [
    {
        icon: Film,
        title: "+ 100 Mil Filmes e Séries",
        description: "Catálogo atualizado diariamente com os maiores lançamentos do cinema e streaming."
    },
    {
        icon: Tv,
        title: "+ 2.000 Canais ao Vivo",
        description: "Esportes, notícias, documentários, infantis e muito mais em 4K e FHD."
    },
    {
        icon: Wifi,
        title: "Sem Travamentos",
        description: "Tecnologia de ponta com servidores dedicados para garantir estabilidade total."
    },
    {
        icon: Shield,
        title: "Suporte Garantido",
        description: "Equipe pronta para te atender todos os dias da semana."
    }
];

export function BenefitsSection() {
    return (
        <section id="beneficios" className="py-24 px-4 md:px-6 bg-[#050a12] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00aaff]/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto max-w-6xl">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                            Por que escolher o <span className="text-[#00aaff]">TecnoPlay?</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Muito mais que um aplicativo de TV. Uma experiência completa de entretenimento para toda a família.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[#00aaff]/50 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-[#00aaff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00aaff] transition-colors duration-300">
                                    <benefit.icon className="text-[#00aaff] group-hover:text-white transition-colors duration-300" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

