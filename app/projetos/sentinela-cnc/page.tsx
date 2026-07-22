"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SentinelaCNC() {
  return (
    <div className="min-h-screen bg-fundo-site">
      {/* Botão de Voltar */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-marca-primaria hover:text-marca-secundaria font-medium flex items-center gap-2 transition-colors">
          &larr; Voltar para o Portfólio
        </Link>
      </div>

      {/* Cabeçalho do Projeto */}
      <header className="max-w-4xl mx-auto px-4 py-12 md:py-20 border-b border-slate-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-marca-primaria/10 text-marca-primaria text-xs font-semibold rounded-md">IoT</span>
            <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-md">Raspberry Pi</span>
            <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-md">Python</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-texto-principal mb-6 tracking-tight">
            Sentinela-CNC: Monitoramento Industrial Inteligente
          </h1>
          <p className="text-xl text-texto-secundario leading-relaxed">
            Um sistema IoT completo desenvolvido para capturar, processar e analisar eventos em tempo real em máquinas CNC, focando na otimização da capacidade produtiva.
          </p>
        </motion.div>
      </header>

      {/* Conteúdo do Projeto */}
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-texto-principal mb-4">O Desafio</h2>
          <p className="text-texto-secundario text-lg leading-relaxed mb-4">
            Na manufatura avançada, o tempo de inatividade e as anomalias operacionais representam custos significativos. O desafio era criar uma ponte entre equipamentos industriais pesados e o gerenciamento de dados na nuvem, permitindo que gestores tomassem decisões baseadas em dados extraídos diretamente do chão de fábrica.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-texto-principal mb-4">A Solução e Arquitetura</h2>
          <p className="text-texto-secundario text-lg leading-relaxed mb-6">
            O Sentinela-CNC atua como um supervisor incansável. A arquitetura envolve o uso de hardware de baixo custo e alta eficiência para ler os status das máquinas e transmitir as métricas de forma estruturada.
          </p>
          <ul className="list-disc list-inside space-y-3 text-texto-secundario text-lg ml-2">
            <li><strong className="text-texto-principal">Coleta de Dados:</strong> Utilização de Raspberry Pi acoplado aos sensores da máquina.</li>
            <li><strong className="text-texto-principal">Métricas Críticas:</strong> Identificação e registro exato de eventos de sobrecarga mecânica/elétrica.</li>
            <li><strong className="text-texto-principal">Análise de Produtividade:</strong> Rastreamento preciso do tempo de <em>standby</em> (máquina ligada, mas ociosa), gerando relatórios de gargalos.</li>
            <li><strong className="text-texto-principal">Processamento:</strong> Scripts otimizados em Python para tratamento dos dados em tempo real.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-texto-principal mb-4">O Impacto</h2>
          <p className="text-texto-secundario text-lg leading-relaxed mb-4">
            A visibilidade em tempo real transformou o controle de qualidade e a gestão da produção. Ao prever sobrecargas e quantificar a ociosidade, tornou-se possível ajustar o fluxo de trabalho antes que as falhas ocorressem, garantindo a integridade dimensional das peças usinadas e o aumento da eficiência global do equipamento (OEE).
          </p>
        </motion.section>

      </main>
    </div>
  );
}