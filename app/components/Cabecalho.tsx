"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <motion.header
      className="bg-fundo-site/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        
        {/* Logo reformulado: Maiúsculo, sem ponto, espaçado e clicável */}
        <Link 
          href="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-black text-xl md:text-2xl tracking-widest text-marca-secundaria hover:opacity-80 transition-opacity"
        >
          KLEBER <span className="font-light text-texto-principal">SOUZA</span>
        </Link>

        {/* Menu de Navegação Desktop */}
        <nav className="hidden md:flex gap-8 font-medium text-texto-secundario">
          <Link 
            href="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-marca-primaria transition-colors"
          >
            Início
          </Link>
          <Link 
            href="/#projetos" 
            className="hover:text-marca-primaria transition-colors"
          >
            Projetos
          </Link>
          <Link 
            href="/#contato" 
            className="hover:text-marca-primaria transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Botão Hambúrguer (Aparece apenas no Celular) */}
        <button 
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden p-2 text-texto-secundario hover:text-marca-primaria focus:outline-none"
          aria-label="Abrir menu de navegação"
        >
          {menuAberto ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Gaveta do Menu Mobile (Abre no celular ao clicar no botão) */}
      {menuAberto && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-fundo-site border-t border-slate-200 px-6 py-4 space-y-4 shadow-lg"
        >
          <Link 
            href="/" 
            onClick={() => {
              setMenuAberto(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="block font-medium text-texto-secundario hover:text-marca-primaria"
          >
            Início
          </Link>
          <Link 
            href="/#projetos" 
            onClick={() => setMenuAberto(false)}
            className="block font-medium text-texto-secundario hover:text-marca-primaria"
          >
            Projetos
          </Link>
          <Link 
            href="/#contato" 
            onClick={() => setMenuAberto(false)}
            className="block font-medium text-texto-secundario hover:text-marca-primaria"
          >
            Contato
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}