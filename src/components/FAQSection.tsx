"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";

const faqs = [
    {
        question: "O que é o TecnoPlay?",
        answer: "O TecnoPlay é um aplicativo de streaming IPTV que oferece acesso a milhares de canais de TV, filmes e séries em alta qualidade. Compatível com diversos dispositivos, proporciona a melhor experiência de entretenimento."
    },
    {
        question: "Em quais dispositivos posso usar o TecnoPlay?",
        answer: "O TecnoPlay é compatível com Smart TVs (Samsung, LG, etc.), TV Box, Amazon Fire Stick, smartphones Android e iOS, tablets e computadores. Você pode assistir onde e quando quiser!"
    },
    {
        question: "Como faço para testar o serviço?",
        answer: "Oferecemos um período de teste gratuito para você conhecer toda a qualidade do nosso serviço. Basta entrar em contato conosco pelo WhatsApp e solicitar seu acesso de demonstração."
    },
    {
        question: "Quantas telas posso usar simultaneamente?",
        answer: "Dependendo do plano escolhido, você pode usar de 1 a múltiplas telas simultaneamente. Consulte nossos planos para encontrar a opção ideal para você e sua família."
    },
    {
        question: "Preciso de uma internet muito rápida?",
        answer: "Recomendamos uma conexão de pelo menos 10 Mbps para uma experiência fluida em HD. Para conteúdo em 4K, sugerimos 25 Mbps ou mais. O aplicativo se adapta automaticamente à sua velocidade de conexão."
    },
    {
        question: "Como funciona o suporte técnico?",
        answer: "Oferecemos suporte técnico 24 horas por dia, 7 dias por semana, via WhatsApp. Nossa equipe está sempre pronta para ajudar com qualquer dúvida ou problema técnico que você possa ter."
    }
];

function FAQItem({ question, answer, isOpen, onClick }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#00aaff]/30">
            <button
                onClick={onClick}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
            >
                <span className="text-white font-medium text-lg pr-4">{question}</span>
                <span className={`text-[#00aaff] text-2xl transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 px-4 md:px-6 bg-[#050a12]">
            <div className="container mx-auto max-w-3xl">
                <ScrollReveal width="100%">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Perguntas <span className="text-[#00aaff]">Frequentes</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Tire suas dúvidas sobre o TecnoPlay e descubra tudo o que você precisa saber.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 mb-4">Ainda tem dúvidas?</p>
                        <a
                            href="https://wa.me/5554999335331"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Fale conosco no WhatsApp
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
