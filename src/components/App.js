import { useState } from "react";
import Jogo from "./Jogo";
import "../css/reset.css";
import "../css/style.css";
import { Letras } from "./Letras";
import Chute from "./Chute";

export default function App() {
  const [desabilitado, setDesabilitado] = useState(true);
  const [erros, setErros] = useState(0);
  const [gabarito, setGabarito] = useState('');
  const [palavra, setPalavra] = useState('');
  const [fim, setFim] = useState('');
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
        fim={fim}
        setFim={setFim}
        resetar = {resetar}
        setResetar ={setResetar}
      >
      </Jogo>
      <Letras
        desabilitado={desabilitado}
        setDesabilitado={setDesabilitado}
        gabarito={gabarito}
        palavra={palavra}
        setPalavra={setPalavra}
        erros={erros}
        setErros={setErros}
        setFim={setFim}
        resetar = {resetar}
        setResetar ={setResetar}
      >
      </Letras>
      <Chute
        desabilitado={desabilitado}
        setDesabilitado={setDesabilitado}
        gabarito={gabarito}
        setFim={setFim}
        resetar = {resetar}
        setResetar ={setResetar}
        setPalavra={setPalavra}
        setErros={setErros}
      >
      </Chute>
    </>
  );
}
