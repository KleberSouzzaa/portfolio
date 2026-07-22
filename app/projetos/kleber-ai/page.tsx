"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EmConstrucao() {
  return (
    <div className="min-h-screen bg-fundo-site flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 border-4 border-marca-primaria border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
        <h1 className="text-3xl md:text-5xl font-bold text-texto-principal mb-4">
          Página em Construção
        </h1>
        <p className="text-lg text-texto-secundario max-w-lg mx-auto mb-8">
          Estou documentando os detalhes técnicos, arquitetura e resultados deste projeto. Em breve a página completa estará disponível!
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3 bg-marca-primaria text-white font-medium rounded-md hover:bg-marca-secundaria transition-colors shadow-md"
        >
          Voltar para o Início
        </Link>
      </motion.div>
    </div>
  );
}