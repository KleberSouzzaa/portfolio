import Cabecalho from "./components/Cabecalho";
import Apresentacao from "./components/Apresentacao";
import Projetos from "./components/Projetos";
import Rodape from "./components/Rodape";

export default function Home() {
  return (
    <div className="min-h-screen bg-fundo-site text-texto-principal">
      {/* Cabeçalho */}
      <Cabecalho></Cabecalho>

      {/* Área Principal (Hero Section) */}
      <Apresentacao></Apresentacao>

      {/* Seção de Projetos */}
      <Projetos></Projetos>
      
      {/* Seção de Contato e Rodapé */}
      <Rodape></Rodape>
    </div>
  );
}