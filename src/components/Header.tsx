import Link from "next/link";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: "#video", label: "Apresentação" },
        { href: "#beneficios", label: "Benefícios" },
        { href: "#planos", label: "Planos" },
        { href: "#como-funciona", label: "Como funciona" },
        { href: "#faq", label: "FAQ" },
    ];

    return (
        <>
            <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl flex items-center justify-between px-6 py-3 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <a href="#" onClick={scrollToTop} className="flex items-center gap-1 group cursor-pointer z-50">
                    <span className="text-xl font-bold tracking-tighter text-[#00aaff] group-hover:text-white transition-colors">TECNO</span>
                    <span className="text-xl font-bold tracking-tighter text-[#ffaa00] group-hover:text-white transition-colors">PLAY</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3 z-50">
                    <Link href="https://wa.me/5554999335331" target="_blank">
                        <Button variant="secondary" size="sm" className="hidden md:inline-flex rounded-full">
                            Seja revendedor
                        </Button>
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#050a12]/95 backdrop-blur-lg flex flex-col items-center justify-center pt-20"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="text-2xl font-bold text-white hover:text-[#00aaff] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="https://wa.me/5554999335331" target="_blank" onClick={closeMenu}>
                                <Button variant="primary" size="lg" className="mt-4 rounded-full px-8">
                                    Seja revendedor
                                </Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}


