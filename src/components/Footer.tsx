import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 px-6 bg-[#020508] border-t border-white/5">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-1">
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
            </div>
        </footer>
    );
}
