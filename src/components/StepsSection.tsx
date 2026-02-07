import { UserPlus, CreditCard, PlayCircle } from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "1. Escolha seu Plano",
        description: "Selecione o pacote que melhor atende suas necessidades entre as opções disponíveis."
    },
    {
        icon: CreditCard,
        title: "2. Realize o Pagamento",
        description: "Pagamento seguro e rápido via PIX. A liberação é imediata após a confirmação."
    },
    {
        icon: PlayCircle,
        title: "3. Receba seu Acesso",
        description: "Você receberá seu login e senha, junto com instruções de instalação, no seu WhatsApp."
    }
];

export function StepsSection() {
    return (
        <section className="py-20 px-4 md:px-6 bg-[#050a12] border-t border-white/5">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                    Veja como é <span className="text-[#ffaa00]">fácil começar</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-1 bg-gradient-to-r from-[#00aaff]/0 via-[#00aaff]/30 to-[#00aaff]/0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-[#050a12] border-2 border-[#00aaff] flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(0,170,255,0.2)]">
                                <step.icon size={28} className="text-[#00aaff]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
