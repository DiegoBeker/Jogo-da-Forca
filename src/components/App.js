import { useState } from "react";
import Jogo from "./Jogo";
import "../css/reset.css";
import "../css/style.css";
import { Letras } from "./Letras";
import palavras from '../palavras'

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [desabilitado, setDesabilitado] = useState(true);
  const [erros, setErros] = useState(0);
  const [gabarito, setGabarito] = useState(palavras[Math.floor(Math.random() * (palavras.length - 1))]);
  const [palavra, setPalavra] = useState('');
  const [ganhou, setGanhou] = useState('');
  const [resetar,setResetar] = useState(false);

  return (
    <>
      <Jogo
        img={erros}
        desabilitado={desabilitado}
        setDesabilitado={setDesabilitado}
        palavra={palavra}
        setPalavra={setPalavra}
        erros={erros}
        setErros={setErros}
        gabarito={gabarito}
        setGabarito={setGabarito}
        ganhou={ganhou}
        setGanhou={setGanhou}
        resetar = {resetar}
        setResetar ={setResetar}
      >
      </Jogo>
      <Letras
        alfabeto={alfabeto}
        desabilitado={desabilitado}
        setDesabilitado={setDesabilitado}
        gabarito={gabarito}
        palavra={palavra}
        setPalavra={setPalavra}
        erros={erros}
        setErros={setErros}
        setGanhou={setGanhou}
        resetar = {resetar}
        setResetar ={setResetar}
      >
      </Letras>
    </>
  );
}
