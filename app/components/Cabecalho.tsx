"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Cabecalho() {
  return (
    <motion.header 
      className="bg-fundo-site border-b border-slate-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="font-bold text-2xl tracking-tighter text-marca-secundaria">
          Kleber<span className="text-texto-principal">.Souza</span>
        </div>
        
        {/* Menu de Navegação */}
        <nav className="hidden md:flex gap-8 font-medium text-texto-secundario">
          <Link href="/" className="hover:text-marca-primaria transition-colors">Início</Link>
          <Link href="#projetos" className="hover:text-marca-primaria transition-colors">Projetos</Link>
          <Link href="#blog" className="hover:text-marca-primaria transition-colors">Blog</Link>
          <Link href="#contato" className="hover:text-marca-primaria transition-colors">Contato</Link>
        </nav>
        
      </div>
    </motion.header>
  );
}