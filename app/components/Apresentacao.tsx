"use client";

import { motion } from "framer-motion";

export default function Apresentacao() {
    return (
      <main className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        
        {/* Tag de destaque */}
        <motion.div className="inline-block px-5 py-2 mb-6 rounded-full bg-slate-200/60 text-slate-700 font-bold text-xs uppercase tracking-wider"
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.0 }}
        >
          Engenharia de Software & Soluções Escaláveis
        </motion.div>
  
        {/* Título Principal */}
        <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-texto-principal mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        >
          Precisão Técnica.<br />
          <span className="text-marca-primaria">Inovação em Sistemas.</span>
        </motion.h1>
  
        {/* Subtítulo */}
        <motion.p className="text-lg md:text-xl text-texto-secundario max-w-4xl mb-10 leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.9 }}
        >
          Com raízes sólidas na precisão da indústria automotiva, aplico a disciplina da Qualidade e a Inteligência Artificial no desenvolvimento de software. Crio plataformas SaaS, integrações IoT e automações inteligentes que eliminam gargalos e geram valor real para negócios de diversos setores.
        </motion.p>
  
        {/* Botões de Ação */}
        <motion.div className="flex flex-col sm:flex-row gap-4">
          <motion.a href="#projetos" className="px-8 py-3.5 bg-marca-primaria text-white rounded-md font-medium hover:bg-marca-secundaria transition-colors shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.4 }}
          >
            Ver Projetos Reais
          </motion.a>
          <motion.a href="#contato" className="px-8 py-3.5 bg-fundo-site text-texto-principal border border-slate-300 rounded-md font-medium hover:border-marca-primaria hover:text-marca-primaria transition-colors"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.4 }}
          >
            Iniciar Conversa
          </motion.a>
        </motion.div>
        
      </main>
    );
  }