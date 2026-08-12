"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SentinelaCNC() {
  return (
    <div className="min-h-screen bg-fundo-site">
      
      {/* Navegação Superior */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/#projetos" className="text-marca-primaria hover:text-marca-secundaria font-medium flex items-center gap-2 transition-colors w-fit">
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
            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-md border border-amber-300">Protótipo Validado em Bancada</span>
            <span className="px-3 py-1 bg-marca-primaria/10 text-marca-primaria text-xs font-bold uppercase tracking-wider rounded-md">Hardware as a Service (HaaS)</span>
            <span className="px-3 py-1 bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-md">Indústria 4.0</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-texto-principal mb-6 tracking-tight leading-tight">
            Sentinela-CNC
          </h1>
          <p className="text-xl md:text-2xl text-texto-secundario leading-relaxed max-w-4xl mb-8">
            Sistema IoT preditivo e não invasivo para o chão de fábrica. O fim das anotações em pranchetas e a transição para a gestão operacional em tempo real.
          </p>
          
          {/* Imagem Temática 1: Indústria e Análise de Gráficos */}
          <div className="w-full h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl mt-10">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Engenheiro analisando tecnologia no chão de fábrica" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex items-end p-6 md:p-10">
              <p className="text-white font-medium text-lg md:text-xl max-w-3xl leading-relaxed">
              Elimine pranchetas e achismos no chão de fábrica: transforme a leitura de corrente elétrica dos equipamentos em indicadores contínuos de produtividade e saúde da máquina, sem intervenções complexas.
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-28">
        
        {/* Seção 1: O Problema e a Cultura da Prancheta */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-7 space-y-6 text-texto-secundario text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-texto-principal mb-4">O Desafio do Chão de Fábrica Legado</h2>
            <p>
              Em grande parte do parque industrial brasileiro, o monitoramento de máquinas operatrizes robustas — como tornos e centros de usinagem <strong>Fanuc, Okuma e Siemens</strong> — esbarra em um obstáculo analógico: a cultura da prancheta.
            </p>
            <p>
              Atualmente, o operador interrompe sua rotina para anotar manualmente a produção e os tempos de parada hora a hora em folhas de papel. A digitalização desses dados ocorre de forma tardia, sendo digitados no sistema ERP apenas no final do turno, gerando um <strong>atraso de resposta operacional de 6 a 9 horas</strong>.
            </p>
            <p>
              Essa dinâmica cria uma gestão puramente reativa, onde falhas mecânicas ou gargalos são reportados de maneira informal por meio do <strong>WhatsApp em celulares particulares</strong> dos próprios funcionários para comunicar chefes e mecânicos. Além do risco de falhas na digitação tardia, o modelo analógico abre margem para a manipulação de dados de ociosidade e produção, criando pontos cegos críticos para a engenharia de qualidade.
            </p>
          </div>
          <div className="md:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              Gargalos do Modelo Analógico
            </h3>
            <ul className="space-y-4 text-sm md:text-base text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-600">✗</span>
                <span><strong>Lentidão na Resposta:</strong> 6 a 9 horas de atraso entre a ocorrência da falha e a tomada de decisão gerencial.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-600">✗</span>
                <span><strong>Comunicação Informal:</strong> Dependência de smartphones pessoais e aplicativos de mensagens não corporativos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-600">✗</span>
                <span><strong>Inconsistência de Dados:</strong> Erros humanos na transcrição para o ERP e vulnerabilidade à manipulação de registros de paradas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-600">✗</span>
                <span><strong>Perda de OEE:</strong> Máquinas ligadas em <em>standby</em> (ociosas) sem rastreabilidade automática em tempo real.</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* NOVO BLOCO: O Desafio do Retrofit e Viabilidade para PMIs */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-xl grid md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-7 space-y-4">
            <span className="px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-md border border-amber-400/30">
              Barreira de Entrada Industrial
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Por que o Retrofit Tradicional é Inviável para Pequenas e Médias Indústrias?</h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Modernizar máquinas CNC antigas ou de gerações passadas através de soluções proprietárias de montadoras exige um investimento altíssimo (CAPEX). O processo de retrofit tradicional demanda <strong>mão de obra altamente especializada e cara</strong> para intervir nos emaranhados de fios e painéis elétricos originais.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              O pior gargalo, no entanto, é o <strong>tempo de máquina parada (downtime)</strong>. Para uma pequena ou média empresa (PMI), parar uma linha de usinagem por dias ou semanas para instalar sensores em CLPs internos representa um prejuízo operacional devastador, tornando a modernização financeiramente inviável.
            </p>
          </div>
          <div className="md:col-span-5 bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
            <h3 className="font-bold text-lg text-white border-b border-slate-700 pb-2">O Diferencial Plug & Play</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              O Sentinela CNC contorna essa barreira com uma arquitetura 100% externa. Através de <strong>sensores magnéticos não invasivos</strong> acoplados na alimentação e processamento local via <strong>módulo de Edge Computing dedicado</strong>, a instalação ocorre em minutos, sem abrir painéis, sem alterar o CLP e <strong>sem parar a produção</strong>.
            </p>
          </div>
        </motion.section>

        {/* Imagem Temática 2: Usinagem e Tecnologia */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-900 rounded-3xl overflow-hidden shadow-xl text-white">
            <div className="p-8 md:p-12 space-y-6">
              <span className="px-3 py-1 bg-marca-primaria/20 text-marca-primaria text-xs font-bold uppercase tracking-wider rounded-md">
                Manutenção Preditiva
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Corrente Elétrica: O Indicador da Causa Raiz
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Enquanto sistemas tradicionais focam na vibração mecânica que já representa o sintoma de um dano estrutural em andamento, o Sentinela CNC monitora o esforço do motor via corrente elétrica. O aumento do esforço de corte manifesta-se em picos de corrente muito antes da vibração ou da quebra da ferramenta, salvaguardando a tolerância dimensional da peça.
              </p>
            </div>
            <div className="h-full min-h-[300px] relative">
              <img 
                src="https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Máquina CNC e automação industrial" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* NOVO BLOCO: A SOLUÇÃO SENTINELA CNC E SUAS QUALIDADES */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm"
        >
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="text-marca-primaria font-bold text-sm tracking-wider uppercase">O Olho Digital da Fábrica</span>
            <h2 className="text-3xl md:text-4xl font-bold text-texto-principal">Afinal, o que é o Sentinela-CNC?</h2>
            <p className="text-texto-secundario text-lg leading-relaxed">
              O Sentinela-CNC é um produto Plug & Play de monitoramento via IoT. Ele traduz os sinais elétricos brutos do painel da máquina em dados estratégicos em tempo real, eliminando totalmente a dependência de pranchetas e mitigando o risco de paradas na linha de montagem dos seus clientes.
            </p>
          </div>

          {/* VÍDEO DO PITCH DO PRODUTO (Destaque Central) */}
          <div className="max-w-3xl mx-auto">
            <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800">
              <video 
                src="/pitch-sentinela.mp4" 
                preload="metadata"
                controls 
                className="w-full h-full object-cover"
              >
                Seu navegador não suporta a exibição de vídeos.
              </video>
            </div>
            <p className="text-center text-sm text-slate-500 mt-3">
              Assista à apresentação executiva e conheça a arquitetura do Sentinela-CNC.
            </p>
          </div>
        
          {/* Grid de Benefícios e Funcionalidades (6 Pontos Fortes) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start pt-6">
            
            {/* Benefício 1 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Monitoramento Remoto Global</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Acompanhe a eficiência do chão de fábrica a qualquer hora. Seja no escritório ou em uma viagem de negócios, tenha a visão do status instantâneo do maquinário na palma da mão.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">OEE e Contagem Automática</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Substitua apontamentos manuais imprecisos pela contagem automática de produção. Tenha acesso a cálculos de OEE e gráficos precisos de desempenho e tendência por turno.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Saúde Exata da Máquina</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Através da corrente elétrica, o sistema mapeia o momento atual do equipamento. Saiba instantaneamente se a máquina está produzindo normal, em sobrecarga, parada em standby ou desligada.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Segregação de Refugos Cirúrgica</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Se uma pastilha de corte quebra, o sistema detecta o aumento imediato do esforço no motor, gerando um <em>timestamp</em> exato (hora/minuto/segundo) para a Qualidade isolar o refugo e salvar o lote.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">Alertas Preditivos (Dashboards)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Se a máquina sair dos níveis corretos de produção ou entrar em ociosidade, alertas visuais e sonoros são emitidos, salvaguardando a linha contra quebras em potencial e altos custos de manutenção.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900">O Fim das Divergências</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Elimina informações maquiadas ou inventadas para encobrir paradas. A imparcialidade do dado colhido diretamente na máquina garante custos reais de fabricação e dispensa horas extras desnecessárias.
              </p>
            </div>

          </div>
        </motion.section>
        {/* Seção 2: Validação em Bancada vs. Futuro MVP Industrial */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8"
        >
          <div className="max-w-3xl">
            <span className="text-marca-primaria font-bold text-sm tracking-wider uppercase">Maturidade do Projeto</span>
            <h2 className="text-3xl font-bold text-texto-principal mt-2 mb-4">Da Bancada de Testes ao MVP Industrial</h2>
            <p className="text-texto-secundario text-lg leading-relaxed">
              A honestidade intelectual e a clareza sobre o nível de maturidade de um produto são fundamentais na engenharia. O Sentinela CNC possui sua lógica, arquitetura e precisão algorítmica <strong>100% validadas em prova de conceito (PoC)</strong>, com um plano de engenharia traçado para a transição para o ambiente industrial severo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            {/* O que foi feito (Bancada) */}
            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/80 space-y-4">
              <div className="flex items-center gap-3 text-amber-900 font-bold text-lg">
                <span className="w-8 h-8 rounded-lg bg-amber-200 flex items-center justify-center text-amber-800 font-extrabold text-sm">1</span>
                Fase Atual: Validação em Bancada
              </div>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                O conceito foi testado utilizando uma carga controlada (ventilador em bancada) e montagem em protoboard. Essa etapa foi crucial para comprovar a eficácia do circuito de condicionamento do sinal analógico lido pelo  <strong>Sensor Magnético Não Invasivo de Alta Precisão</strong>, a conversão digital via módulo e o processamento de borda no <strong>Módulo de Edge Computing Dedicado</strong>, comparando os dados com um amperímetro digital de referência.
              </p>
            </div>

            {/* O próximo passo (MVP Industrial) */}
            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200/80 space-y-4">
              <div className="flex items-center gap-3 text-emerald-900 font-bold text-lg">
                <span className="w-8 h-8 rounded-lg bg-emerald-200 flex items-center justify-center text-emerald-800 font-extrabold text-sm">2</span>
                Próximo Passo: MVP no Chão de Fábrica
              </div>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Para o verdadeiro MVP industrial, o foco é a evolução da robustez de hardware. Os cabos e conexões frágeis de protoboard darão lugar a uma <strong>Placa de Circuito Impresso (PCB) dedicada</strong>, encapsulada em um <strong>case industrial com proteção IP65</strong> (resistente a névoa de óleo e poeira metálica), pronta para instalação não invasiva em máquinas de alta potência diretamente no chão de fábrica.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Seção 3: Tabela de Benchmarking Atualizada (Com LoRaWAN e Notas Justas) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-texto-principal">Benchmarking e Tecnologias de Mercado</h2>
            <p className="text-texto-secundario text-lg">
              Comparativo técnico e financeiro avaliando protocolos modernos de conectividade industrial e os principais players do setor (avaliação realista de 0 a 10).
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-4 md:p-6 font-semibold w-1/3">Critério Avaliado</th>
                  <th className="p-4 md:p-6 font-semibold text-center">OEMs Tradicionais<br/><span className="text-xs text-slate-400 font-normal">Siemens / Fanuc</span></th>
                  <th className="p-4 md:p-6 font-semibold text-center">Redes LoRaWAN<br/><span className="text-xs text-slate-400 font-normal">Conectividade Sem Fio</span></th>
                  <th className="p-4 md:p-6 font-semibold text-center">Tractian<br/><span className="text-xs text-slate-400 font-normal">SaaS Vibração</span></th>
                  <th className="p-4 md:p-6 font-semibold text-center bg-marca-primaria text-white">Sentinela CNC<br/><span className="text-xs text-blue-200 font-normal">HaaS Corrente / Edge</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium text-sm md:text-base">
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 md:p-6">
                    <strong className="block text-slate-900">Viabilidade em PMIs (CAPEX / Setup)</strong>
                    <span className="text-xs text-slate-500 font-normal">Baixo custo inicial, sem licenças corporativas de milhares de dólares.</span>
                  </td>
                  <td className="p-4 md:p-6 text-center text-red-600 font-bold">3</td>
                  <td className="p-4 md:p-6 text-center text-amber-600 font-bold">6</td>
                  <td className="p-4 md:p-6 text-center text-emerald-600 font-bold">8</td>
                  <td className="p-4 md:p-6 text-center bg-blue-50/50 text-marca-primaria font-extrabold text-lg">9</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 md:p-6">
                    <strong className="block text-slate-900">Zero Downtime (Instalação Não Invasiva)</strong>
                    <span className="text-xs text-slate-500 font-normal">Capacidade de instalar sem parar a máquina ou abrir painel/CLP.</span>
                  </td>
                  <td className="p-4 md:p-6 text-center text-red-600 font-bold">3</td>
                  <td className="p-4 md:p-6 text-center text-amber-600 font-bold">5</td>
                  <td className="p-4 md:p-6 text-center text-emerald-600 font-bold">9</td>
                  <td className="p-4 md:p-6 text-center bg-blue-50/50 text-marca-primaria font-extrabold text-lg">10</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 md:p-6">
                    <strong className="block text-slate-900">Interoperabilidade (Agnóstico a Marcas)</strong>
                    <span className="text-xs text-slate-500 font-normal">Comunicação fluida entre tornos antigos e centros de usinagem novos.</span>
                  </td>
                  <td className="p-4 md:p-6 text-center text-red-600 font-bold">3</td>
                  <td className="p-4 md:p-6 text-center text-emerald-600 font-bold">9</td>
                  <td className="p-4 md:p-6 text-center text-emerald-600 font-bold">8</td>
                  <td className="p-4 md:p-6 text-center bg-blue-50/50 text-marca-primaria font-extrabold text-lg">9</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 md:p-6">
                    <strong className="block text-slate-900">Análise da Causa Raiz (Esforço de Corte)</strong>
                    <span className="text-xs text-slate-500 font-normal">Detecção via corrente elétrica antes do dano mecânico ou vibração severa.</span>
                  </td>
                  <td className="p-4 md:p-6 text-center text-emerald-600 font-bold">9</td>
                  <td className="p-4 md:p-6 text-center text-amber-600 font-bold">8</td>
                  <td className="p-4 md:p-6 text-center text-amber-600 font-bold">6</td>
                  <td className="p-4 md:p-6 text-center bg-blue-50/50 text-marca-primaria font-extrabold text-lg">10</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 md:p-6">
                    <strong className="block text-slate-900">Taxa de Atualização e Frequência (Live)</strong>
                    <span className="text-xs text-slate-500 font-normal">Leitura contínua em tempo real sem limitação de pacotes de dados.</span>
                  </td>
                  <td className="p-4 md:p-6 text-center text-emerald-600 font-bold">9</td>
                  <td className="p-4 md:p-6 text-center text-red-600 font-bold">4</td>
                  <td className="p-4 md:p-6 text-center text-amber-600 font-bold">7</td>
                  <td className="p-4 md:p-6 text-center bg-blue-50/50 text-marca-primaria font-extrabold text-lg">8</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-slate-100 font-extrabold text-slate-900 border-t-2 border-slate-300 text-base md:text-lg">
                  <td className="p-4 md:p-6 text-right uppercase">Pontuação Comparativa (Máx. 50):</td>
                  <td className="p-4 md:p-6 text-center text-red-600">27</td>
                  <td className="p-4 md:p-6 text-center text-amber-600">32</td>
                  <td className="p-4 md:p-6 text-center text-emerald-600">38</td>
                  <td className="p-4 md:p-6 text-center bg-marca-primaria text-white text-xl shadow-inner">46</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="bg-slate-100 p-6 md:p-8 rounded-2xl border-l-4 border-marca-primaria border-y border-r border-slate-200 text-base md:text-lg text-slate-800 space-y-3 shadow-sm">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-marca-primaria" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Análise Técnica: LoRaWAN vs. Sentinela CNC
            </h3>
            <p className="leading-relaxed">
              Redes sem fio como <strong>LoRaWAN</strong> são excepcionais para comunicação a longas distâncias e sensores de bateria em grandes plantas industriais (como no setor automotivo e de autopeças). Contudo, na usinagem de precisão, o LoRaWAN apresenta restrições na taxa de envio de dados (banda estreita), não sendo ideal para capturar picos instantâneos de sobrecarga de milissegundos.
            </p>
            <p className="leading-relaxed">
              Além disso, acoplar módulos LoRaWAN em máquinas legadas frequentemente exige paradas para intervenção no painel. O <strong>Sentinela CNC</strong> foca em <em>Edge Computing</em> com amostragem contínua de alta frequência e isolamento galvânico, entregando uma solução mais ágil, plug & play e precisa para o controle dimensional de peças usinadas.
            </p>
          </div>
        </motion.section>

        {/* Seção 4: O Modelo de Negócio HaaS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <span className="text-marca-primaria font-bold text-sm tracking-wider uppercase">Estratégia Comercial</span>
            <h2 className="text-3xl font-bold text-texto-principal">Por que o modelo HaaS é ideal para a Indústria?</h2>
            <p className="text-texto-secundario text-lg leading-relaxed">
              O modelo de <strong>Hardware as a Service (HaaS)</strong> ou comodato atrelado à assinatura mensal (SaaS) remove a maior barreira de vendas na indústria mecânica: a aprovação de orçamento de investimento (CAPEX).
            </p>
            <p className="text-texto-secundario leading-relaxed">
              Enquanto licenças corporativas tradicionais exigem aprovações de diretoria para investimentos de 4 a 15 mil dólares, a assinatura mensal do Sentinela CNC entra como despesa operacional (OPEX). A fábrica recebe o kit de monitoramento sem custo de aquisição do aparelho, e a facilidade de manutenção e troca rápida garante fidelização de longo prazo com o cliente.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-xl space-y-6">
            <h3 className="text-xl font-bold border-b border-slate-700 pb-4">Benefícios Diretos para a Gestão</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span><strong>Zero CAPEX:</strong> Sem necessidade de imobilizar capital em hardware.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span><strong>Aprovação Simplificada:</strong> Despesa operacional (OPEX) aprovada na gerência.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span><strong>Hardware Evolutivo:</strong> Atualizações de placas e sensores garantidas no contrato.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span><strong>Retorno Imediato (ROI):</strong> Identificação de gargalos já na primeira semana.</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Chamada para Ação Final */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-marca-primaria rounded-3xl p-8 md:p-14 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Quer conhecer os detalhes de arquitetura do projeto?</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Tenho facilidade para transformar desafios complexos de chão de fábrica em soluções tecnológicas eficientes, unindo metrologia, qualidade industrial e desenvolvimento de software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/kleber-souza-023965241/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-marca-primaria hover:bg-slate-100 transition-colors rounded-xl font-bold shadow-md text-lg"
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