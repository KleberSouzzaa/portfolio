import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Cabeçalho / Navbar */}
      <header className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter text-blue-800">
            Kleber<span className="text-slate-800">.Souza</span>
          </div>
          
          <nav className="hidden md:flex gap-8 font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-700 transition-colors">Início</Link>
            <Link href="#projetos" className="hover:text-blue-700 transition-colors">Projetos</Link>
            <Link href="#blog" className="hover:text-blue-700 transition-colors">Blog</Link>
            <Link href="#contato" className="hover:text-blue-700 transition-colors">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Área Principal (Hero Section) */}
      <main className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        
        {/* Tag de Destaque */}
        <div className="inline-block px-5 py-2 mb-6 rounded-full bg-slate-200 text-slate-800 text-sm font-bold tracking-wider uppercase">
          Engenharia de Software & Soluções Escaláveis
        </div>
        
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Precisão Técnica.<br />
          <span className="text-blue-700">Inovação em Sistemas.</span>
        </h1>
        
        {/* Resumo */}
        <p className="max-w-3xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Com raízes sólidas na precisão da indústria automotiva, aplico a disciplina da Qualidade e a Inteligência Artificial no desenvolvimento de software. Crio plataformas SaaS, integrações IoT e automações inteligentes que eliminam gargalos e geram valor real para negócios de diversos setores.
        </p>
        
        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link href="#projetos" className="px-8 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition shadow-lg w-full sm:w-auto">
            Ver Projetos Reais
          </Link>
          <Link href="#contato" className="px-8 py-3 bg-slate-200 text-slate-900 border border-slate-300 font-medium rounded-lg hover:bg-slate-300 transition w-full sm:w-auto">
            Iniciar Conversa
          </Link>
        </div>
        
      </main>
      {/* Seção de Projetos */}
      <section id="projetos" className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-200">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Projetos em Destaque</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluções reais que unem engenharia de software, automação e visão de negócios para gerar resultados práticos.
          </p>
        </div>

        {/* Grade de Cartões */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Sentinela-CNC */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sentinela-CNC</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                Plataforma IoT para monitoramento inteligente de máquinas CNC. Coleta de dados em tempo real via sensores para antecipar falhas e analisar tempos de standby e sobrecarga.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md">IoT</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">Raspberry Pi</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">Python</span>
              </div>
            </div>
          </div>

          {/* Card 2: Kleber.AI */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kleber.AI</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                Assistente de inteligência artificial personalizado. Uma interface interativa construída para automatizar fluxos de trabalho locais, integração de ferramentas e análise de dados.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md">IA</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">Python</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">Streamlit</span>
              </div>
            </div>
          </div>

          {/* Card 3: ObraMassa */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-2">ObraMassa</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                Plataforma focada em escalabilidade e gestão para o setor de construção civil. Ferramenta projetada para otimizar processos comerciais e organizar o fluxo de materiais e serviços.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md">SaaS</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">Next.js</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">Gestão</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Seção de Contato e Rodapé */}
      <footer id="contato" className="bg-slate-900 text-slate-300 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vamos construir algo juntos?</h2>
          
          <p className="text-slate-400 max-w-2xl mb-10 text-lg">
            Seja para discutir uma oportunidade na área de engenharia de software, desenvolvimento de um novo SaaS ou uma troca de ideias sobre tecnologia, minha caixa de entrada está aberta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto px-4 sm:px-0">
            {/* Troque o e-mail abaixo pelo seu */}
            <a href="mailto:klebersouzzaa@hotmail.com" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition w-full sm:w-auto shadow-lg">
              Enviar E-mail
            </a>
            
            {/* Adicione o link do seu perfil no LinkedIn */}
            <a href="https://www.linkedin.com/in/kleber-souza-023965241/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-700 transition w-full sm:w-auto">
              LinkedIn
            </a>
            
            <a href="https://github.com/KleberSouzzaa" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-700 transition w-full sm:w-auto">
              GitHub
            </a>
          </div>

          {/* Assinatura Final */}
          <div className="w-full border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {new Date().getFullYear()} Kleber Souza. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0 text-slate-500">Desenvolvido com Next.js & Tailwind CSS</p>
          </div>
          
        </div>
      </footer>
    </div>
  );
}