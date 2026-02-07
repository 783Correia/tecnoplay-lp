import { Check, ShoppingCart } from "lucide-react";
import { Button } from "./ui/Button";

const plans = [
    {
        name: "Mensal",
        price: "34,90",
        period: "mês",
        highlight: false,
        features: [
            "Acesso completo",
            "Qualidade 4K/FHD",
            "Multi-telas (1 Tela)",
            "Guia de Programação (EPG)",
            "Suporte via WhatsApp"
        ]
    },
    {
        name: "Semestral",
        price: "179,90",
        period: "6 meses",
        highlight: true,
        tag: "MAIS VENDIDO",
        features: [
            "Acesso completo",
            "Qualidade 4K/FHD",
            "Multi-telas (Até 2 Telas)",
            "Guia de Programação (EPG)",
            "Suporte Preferencial",
            "Economize R$ 29,00"
        ]
    },
    {
        name: "Anual",
        price: "359,90",
        period: "ano",
        highlight: false,
        features: [
            "Acesso completo",
            "Qualidade 4K/FHD",
            "Multi-telas (Até 3 Telas)",
            "Guia de Programação (EPG)",
            "Suporte VIP",
            "Economize R$ 59,00"
        ]
    }
];

export function PricingSection() {
    return (
        <section id="planos" className="py-24 px-4 md:px-6 bg-[#050a12] relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-[#00aaff] font-bold tracking-wider text-sm uppercase mb-2 block">Nossos Planos</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Escolha o plano ideal para <span className="text-[#ffaa00]">você</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Sem fidelidade, cancele quando quiser. Liberdade total para você assistir o que gosta.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 ${plan.highlight
                                    ? "bg-[#00aaff]/10 border-[#00aaff] scale-105 shadow-[0_0_40px_rgba(0,170,255,0.15)] z-10"
                                    : "bg-white/5 border-white/5 hover:border-white/20"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00aaff] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                                    {plan.tag}
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-end justify-center gap-1 mb-2">
                                    <span className="text-gray-400 text-sm mb-1">R$</span>
                                    <span className="text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                                </div>
                                <span className="text-gray-500 text-sm">/ {plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className={`p-1 rounded-full ${plan.highlight ? "bg-[#00aaff]" : "bg-white/10"}`}>
                                            <Check size={12} className="text-white" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? "primary" : "outline"}
                                className="w-full"
                                size="lg"
                            >
                                <ShoppingCart className="mr-2" size={18} />
                                ASSINAR AGORA
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
