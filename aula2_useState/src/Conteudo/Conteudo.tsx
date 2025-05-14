import Atv1 from "./Atvs/Atv1";
import Atv2 from "./Atvs/Atv2";
import Atv3 from "./Atvs/Atv3";

interface MainPros {
  conteudo: number;
}
function Conteudo({ conteudo }: MainPros) {
  let campo;
  switch (conteudo) {
    case 1:
      campo = <Atv1 />;
      break;
    case 2:
      campo = <Atv2 />
      break;
    case 3:
      campo =  <Atv3 />
      break;
  }
  return campo;
}
export default Conteudo;
