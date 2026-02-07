export function VideoSection() {
    return (
        <section className="py-20 px-4 md:px-6 bg-[#050a12]">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                    Conheça agora nosso <span className="text-[#00aaff]">aplicativo!</span>
                </h2>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,170,255,0.2)] border border-white/10">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Placeholder"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
                    Veja como é simples e intuitivo navegar pelo TecnoPlay. A melhor experiência de streaming espera por você.
                </p>
            </div>
        </section>
    );
}
