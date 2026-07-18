export default function Apresentacao() {
    return (
      <main className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        
        {/* Tag de destaque */}
        <div className="inline-block px-5 py-2 mb-6 rounded-full bg-slate-200/60 text-slate-700 font-bold text-xs uppercase tracking-wider">
          Engenharia de Software & Soluções Escaláveis
        </div>
  
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-texto-principal mb-6">
          Precisão Técnica.<br />
          <span className="text-marca-primaria">Inovação em Sistemas.</span>
        </h1>
  
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-texto-secundario max-w-4xl mb-10 leading-relaxed">
          Com raízes sólidas na precisão da indústria automotiva, aplico a disciplina da Qualidade e a Inteligência Artificial no desenvolvimento de software. Crio plataformas SaaS, integrações IoT e automações inteligentes que eliminam gargalos e geram valor real para negócios de diversos setores.
        </p>
  
        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projetos" className="px-8 py-3.5 bg-marca-primaria text-white rounded-md font-medium hover:bg-marca-secundaria transition-colors shadow-md">
            Ver Projetos Reais
          </a>
          <a href="#contato" className="px-8 py-3.5 bg-fundo-site text-texto-principal border border-slate-300 rounded-md font-medium hover:border-marca-primaria hover:text-marca-primaria transition-colors">
            Iniciar Conversa
          </a>
        </div>
        
      </main>
    );
  }