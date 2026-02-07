import Link from "next/link";
import { Button } from "./ui/Button";
import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-1">
                <span className="text-2xl font-bold tracking-tighter text-[#00aaff]">TECNO</span>
                <span className="text-2xl font-bold tracking-tighter text-[#ffaa00]">PLAY</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Início
                </Link>
                <Link href="#planos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Planos
                </Link>
                <Link href="#beneficios" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Benefícios
                </Link>
                <Link href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    FAQ
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                <Button variant="secondary" size="sm" className="hidden md:inline-flex">
                    Área do Cliente
                </Button>
                <button className="md:hidden text-white">
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
}
