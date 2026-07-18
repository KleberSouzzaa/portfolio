export default function Rodape() {
    return (
      <footer id="contato" className="bg-slate-900 text-slate-300 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vamos construir algo juntos?</h2>
          
          <p className="text-slate-400 max-w-2xl mb-10 text-lg">
            Seja para discutir uma oportunidade na área de engenharia de software, desenvolvimento de um novo SaaS ou uma troca de ideias sobre tecnologia, minha caixa de entrada está aberta.
          </p>
  
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto px-4 sm:px-0">
            {/* Botão Principal com a cor da marca */}
            <a href="mailto:klebersouzzaa@hotmail.com" className="px-8 py-3 bg-marca-primaria text-white font-medium rounded-md hover:bg-marca-secundaria transition w-full sm:w-auto shadow-lg">
              Enviar E-mail
            </a>
            
            <a href="https://www.linkedin.com/in/kleber-souza-023965241/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-md hover:bg-slate-700 transition w-full sm:w-auto">
              LinkedIn
            </a>
            
            <a href="https://github.com/KleberSouzzaa" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-md hover:bg-slate-700 transition w-full sm:w-auto">
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
    );
  }