"use client";

import { motion } from "framer-motion";

export default function Projetos() {
  return (
    <section id="projetos" className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-200">
      
      {/* Cabeçalho da Seção */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} /* Garante que a animação rode apenas 1 vez */
      >
        <h2 className="text-3xl md:text-4xl font-bold text-texto-principal mb-4">Projetos em Destaque</h2>
        <p className="text-lg text-texto-secundario max-w-2xl mx-auto">
          Soluções reais que unem engenharia de software, automação e visão de negócios para gerar resultados práticos.
        </p>
      </motion.div>

      {/* Grade de Cartões */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Sentinela-CNC */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8 flex flex-col h-full">
            <h3 className="text-xl font-bold text-texto-principal mb-2">Sentinela-CNC</h3>
            <p className="text-texto-secundario mb-6 text-sm leading-relaxed flex-grow">
              Plataforma IoT para monitoramento inteligente de máquinas CNC. Coleta de dados em tempo real via sensores para antecipar falhas e analisar tempos de standby e sobrecarga.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-marca-primaria/10 text-marca-primaria text-xs font-semibold rounded-md">IoT</span>
              <span className="px-3 py-1 bg-slate-100 text-texto-secundario text-xs font-semibold rounded-md">Raspberry Pi</span>
              <span className="px-3 py-1 bg-slate-100 text-texto-secundario text-xs font-semibold rounded-md">Python</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Kleber.AI */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8 flex flex-col h-full">
            <h3 className="text-xl font-bold text-texto-principal mb-2">Kleber.AI</h3>
            <p className="text-texto-secundario mb-6 text-sm leading-relaxed flex-grow">
              Assistente de inteligência artificial personalizado. Uma interface interativa construída para automatizar fluxos de trabalho locais, integração de ferramentas e análise de dados.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-marca-primaria/10 text-marca-primaria text-xs font-semibold rounded-md">IA</span>
              <span className="px-3 py-1 bg-slate-100 text-texto-secundario text-xs font-semibold rounded-md">Python</span>
              <span className="px-3 py-1 bg-slate-100 text-texto-secundario text-xs font-semibold rounded-md">Streamlit</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: ObraMassa */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8 flex flex-col h-full">
            <h3 className="text-xl font-bold text-texto-principal mb-2">ObraMassa</h3>
            <p className="text-texto-secundario mb-6 text-sm leading-relaxed flex-grow">
              Plataforma focada em escalabilidade e gestão para o setor de construção civil. Ferramenta projetada para otimizar processos comerciais e organizar o fluxo de materiais e serviços.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-marca-primaria/10 text-marca-primaria text-xs font-semibold rounded-md">SaaS</span>
              <span className="px-3 py-1 bg-slate-100 text-texto-secundario text-xs font-semibold rounded-md">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 text-texto-secundario text-xs font-semibold rounded-md">Gestão</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}