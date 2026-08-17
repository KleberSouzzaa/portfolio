"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function KleberAI() {
  return (
    <div className="min-h-screen bg-fundo-site">
      
      {/* Navegação Superior */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/#projetos" className="text-emerald-600 hover:text-emerald-500 font-medium flex items-center gap-2 transition-colors w-fit">
          &larr; Voltar para o Portfólio
        </Link>
      </div>

      {/* Hero Section do Projeto */}
      <header className="max-w-6xl mx-auto px-4 py-8 md:py-12 border-b border-slate-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-md border border-emerald-300">Produto Funcional</span>
            <span className="px-3 py-1 bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-md">Inteligência Artificial (RAG)</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider rounded-md">Visão Computacional</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-texto-principal mb-6 tracking-tight leading-tight">
            Kleber.AI
          </h1>
          <p className="text-xl md:text-2xl text-texto-secundario leading-relaxed max-w-4xl mb-8">
            Assistente Especialista em Metrologia e Qualidade 4.0. Resolução instantânea de alarmes e calibrações com zero alucinação, baseado nos manuais oficiais da fábrica.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://kleber-ai.streamlit.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors rounded-xl font-bold shadow-lg text-lg flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              Testar o Kleber.AI ao Vivo
            </a>
          </div>

          {/* Imagem Temática 1: IA e Dados */}
          <div className="w-full h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl mt-10 border border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop" 
              alt="Inteligência Artificial processando dados" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex items-end p-6 md:p-10">
              <p className="text-emerald-50 font-medium text-lg md:text-xl max-w-3xl leading-relaxed">
              O fim da perda de tempo folheando manuais de 500 páginas. O Kleber.AI lê o painel da sua máquina e cruza a informação com a documentação técnica instantaneamente.
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-28">
        
        {/* Seção 1: O Problema */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-7 space-y-6 text-texto-secundario text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-texto-principal mb-4">O Gargalo do Conhecimento no Laboratório</h2>
            <p>
              Em laboratórios de metrologia e chãos de fábrica modernos, equipamentos de altíssima precisão (como Tridimensionais <strong>ZEISS</strong>, Rugosímetros e equipamentos <strong>Hommelwerke</strong>) possuem curvas de aprendizado íngremes e manuais técnicos complexos.
            </p>
            <p>
              Quando um alarme desconhecido surge na tela ou uma dúvida de calibração paralisa o setup, o inspetor de qualidade perde um tempo valioso tentando localizar o procedimento correto em arquivos PDF fragmentados ou catálogos físicos desatualizados. 
            </p>
            <p>
              Recorrer a Inteligências Artificiais genéricas abertas na internet (como o ChatGPT padrão) não é uma opção segura. Na engenharia de qualidade, uma <strong>IA que alucina</strong> inventando um código de comando inexistente pode causar colisões severas nos equipamentos e prejuízos incalculáveis.
            </p>
          </div>
          <div className="md:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              Riscos da Abordagem Tradicional
            </h3>
            <ul className="space-y-4 text-sm md:text-base text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-600">✗</span>
                <span><strong>Downtime Elevado:</strong> Máquinas paradas enquanto técnicos procuram soluções em catálogos extensos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-600">✗</span>
                <span><strong>Alucinação de IA:</strong> Modelos genéricos gerando instruções erradas para máquinas CNC específicas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-600">✗</span>
                <span><strong>Silos de Informação:</strong> Apenas os funcionários mais antigos sabem resolver problemas críticos (dependência de heróis).</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* O Desafio Tecnológico: RAG vs Treinamento */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-xl grid md:grid-cols-12 gap-8 items-center border border-emerald-900/30"
        >
          <div className="md:col-span-7 space-y-4">
            <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-md border border-emerald-400/30">
              Engenharia de Software (RAG)
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">A Solução: Base de Conhecimento Privada</h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              O Kleber.AI não tenta adivinhar as respostas. Ele foi desenvolvido com a arquitetura <strong>RAG (Retrieval-Augmented Generation)</strong> utilizando Python e bibliotecas de extração de dados (PyPDF2). 
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Em seus bastidores, o sistema carrega silenciosamente os manuais originais em PDF da empresa. Quando o usuário faz uma pergunta, a IA vasculha exclusivamente essa documentação privada. Se a resposta existir, ela formula um passo a passo claro. Se não existir, ela tem a instrução ética de <strong>orientar a busca por assistência técnica</strong>, blindando a fábrica contra erros.
            </p>
          </div>
          <div className="md:col-span-5 bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
            <h3 className="font-bold text-lg text-white border-b border-slate-700 pb-2">Stack Tecnológica</h3>
            <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
              <li>• <strong>Back-end & Front-end:</strong> Python + Streamlit</li>
              <li>• <strong>Motor de IA:</strong> Google Gemini 2.5 Flash API</li>
              <li>• <strong>Visão Computacional:</strong> Biblioteca Pillow (PIL)</li>
              <li>• <strong>Extração de Dados:</strong> PyPDF2 (OCR Ready)</li>
              <li>• <strong>Controle de Sessão:</strong> UUID + Session State nativo</li>
            </ul>
          </div>
        </motion.section>

        {/* Imagem Temática 2: Visão Computacional */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-900 rounded-3xl overflow-hidden shadow-xl text-white">
            <div className="p-8 md:p-12 space-y-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-md">
                Visão Computacional
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Leitura Instantânea de Painéis e Alarmes
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Digitar códigos de erros longos e em idiomas estrangeiros frequentemente resulta em falhas. O Kleber.AI resolve isso processando imagens. Basta o inspetor bater uma foto da tela do equipamento com o celular e anexar no chat. O sistema identifica o alarme visualmente e extrai a solução direta do manual.
              </p>
            </div>
            <div className="h-full min-h-[300px] relative">
              <img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop" 
                alt="Processamento de código e IA" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Grid de Benefícios e Funcionalidades (6 Pontos Fortes) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm"
        >
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="text-emerald-600 font-bold text-sm tracking-wider uppercase">Features do Produto</span>
            <h2 className="text-3xl md:text-4xl font-bold text-texto-principal">Mais que um Chat, um Software Completo</h2>
            <p className="text-texto-secundario text-lg leading-relaxed">
              O Kleber.AI foi construído como um produto SaaS maduro, possuindo gestão de contexto de memória, interface moderna e ferramentas específicas para o controle de qualidade.
            </p>
          </div>
        
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start pt-6">
            
            {/* Benefício 1 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Leitura de Manuais (RAG)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Integração nos bastidores com dezenas de PDFs técnicos. A IA consulta catálogos internos antes de formular qualquer instrução para o operador.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Upload de Imagens (Visão)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Capacidade de receber fotos de painéis elétricos, telas de máquinas e peças usinadas para diagnóstico visual automático de falhas.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Gestão de Histórico (Sessões)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Navegação via barra lateral fluida. O usuário pode alternar entre diagnósticos diferentes, renomear conversas e retomar investigações de problemas técnicos antigos.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Respostas em Streaming</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Efeito de digitação em tempo real, diminuindo a ansiedade do operador e entregando uma experiência de alto nível equivalente aos melhores produtos do Vale do Silício.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Anti-Alucinação Corporativa</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Programado com Prompt Engineering avançado e temperatura baixa de geração (0.2) para garantir o máximo de objetividade, sem invenções ou respostas poéticas.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Interface 100% Responsiva</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                O menu lateral se ajusta automaticamente (estilo hambúrguer) em smartphones, ideal para os inspetores utilizarem no celular diretamente no meio da fábrica.
              </p>
            </div>

          </div>
        </motion.section>

        {/* Tabela de Benchmarking Atualizada */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-texto-principal">Benchmarking de Resolução de Problemas</h2>
            <p className="text-texto-secundario text-lg">
              Comparativo de eficiência entre a busca tradicional, o uso imprudente de IA aberta e a solução blindada do Kleber.AI.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-4 md:p-6 font-semibold w-1/3">Critério Avaliado</th>
                  <th className="p-4 md:p-6 font-semibold text-center">Busca Manual<br/><span className="text-xs text-slate-400 font-normal">Arquivos Físicos/PDFs</span></th>
                  <th className="p-4 md:p-6 font-semibold text-center">ChatGPT Genérico<br/><span className="text-xs text-slate-400 font-normal">Internet Aberta</span></th>
                  <th className="p-4 md:p-6 font-semibold text-center bg-emerald-600 text-white">Kleber.AI<br/><span className="text-xs text-emerald-200 font-normal">RAG Privado Corporativo</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium text-sm md:text-base">
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 md:p-6">
                    <strong className="block text-slate-900">Velocidade de Resposta</strong>
                    <span className="text-xs text-slate-500 font-normal">Tempo gasto para encontrar o procedimento exato.</span>
                  </td>
                  <td className="p-4 md:p-6 text-center text-red-600 font-bold">Lento (Min/Horas)</td>
                  <td className="p-4 md:p-6 text-center text-emerald-600 font-bold">Imediato</td>
                  <td className="p-4 md:p-6 text-center bg-emerald-50 text-emerald-700 font-extrabold text-lg">Imediato</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 md:p-6">
                    <strong className="block text-slate-900">Confiabilidade Técnica (Zero Alucinação)</strong>
                    <span className="text-xs text-slate-500 font-normal">Garantia de que o procedimento é válido para a máquina.</span>
                  </td>
                  <td className="p-4 md:p-6 text-center text-emerald-600 font-bold">Alta (100%)</td>
                  <td className="p-4 md:p-6 text-center text-red-600 font-bold">Baixa (Perigoso)</td>
                  <td className="p-4 md:p-6 text-center bg-emerald-50 text-emerald-700 font-extrabold text-lg">Alta (100%)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 md:p-6">
                    <strong className="block text-slate-900">Integração com Imagens (Visão)</strong>
                    <span className="text-xs text-slate-500 font-normal">Capacidade de ler a tela da máquina via foto.</span>
                  </td>
                  <td className="p-4 md:p-6 text-center text-red-600 font-bold">Inexistente</td>
                  <td className="p-4 md:p-6 text-center text-amber-600 font-bold">Limitada/Genérica</td>
                  <td className="p-4 md:p-6 text-center bg-emerald-50 text-emerald-700 font-extrabold text-lg">Avançada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Chamada para Ação Final */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-emerald-600 rounded-3xl p-8 md:p-14 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Gostou da evolução do Kleber.AI?</h2>
          <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Unir conhecimentos profundos de Metrologia com as mais modernas linguagens de desenvolvimento (Python e Next.js) é o que me permite criar softwares que realmente resolvem dores industriais reais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">

          <a 
              href="https://kleber-ai.streamlit.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors rounded-xl font-bold shadow-md text-lg"
            >
              Testar o Kleber.AI ao Vivo
            </a>

            <a 
              href="https://www.linkedin.com/in/kleber-souza-023965241/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-emerald-700 hover:bg-slate-100 transition-colors rounded-xl font-bold shadow-md text-lg"
            >
              Conecte-se comigo no LinkedIn
            </a>
            <Link 
              href="/" 
              className="px-8 py-4 bg-transparent border-2 border-white/80 hover:bg-white/10 text-white transition-colors rounded-xl font-bold text-lg"
            >
              Ver Outros Projetos
            </Link>
          </div>
        </motion.section>

      </main>
    </div>
  );
}