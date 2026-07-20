"use client";

import { motion } from "framer-motion";

export default function Rodape() {
  return (
    <footer id="contato" className="bg-slate-900 text-slate-300 py-16 mt-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Vamos construir algo juntos?
        </motion.h2>
        
        <motion.p 
          className="text-slate-400 max-w-2xl mb-10 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Seja para discutir uma oportunidade na área de engenharia de software, desenvolvimento de um novo SaaS ou uma troca de ideias sobre tecnologia, minha caixa de entrada está aberta.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Botões com efeito Hover/Tap para interatividade */}
          <motion.a 
            href="mailto:klebersouzzaa@hotmail.com" 
            className="px-8 py-3 bg-marca-primaria text-white font-medium rounded-md hover:bg-marca-secundaria transition w-full sm:w-auto shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar E-mail
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/kleber-souza-023965241/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-md hover:bg-slate-700 transition w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          
          <motion.a 
            href="https://github.com/KleberSouzzaa" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-md hover:bg-slate-700 transition w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </motion.div>

        {/* Assinatura Final */}
        <motion.div 
          className="w-full border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Kleber Souza. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 text-slate-500">Desenvolvido com Next.js & Tailwind CSS</p>
        </motion.div>
        
      </div>
    </footer>
  );
}