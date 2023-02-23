import { useState } from "react";
import Jogo from "./Jogo";
import "../css/reset.css";
import "../css/style.css";
import { Letras } from "./Letras";
import palavras from '../palavras'

export default function App() {
  const forcas = ["forca0.png","forca1.png","forca2.png","forca3.png","forca4.png","forca5.png","forca6.png"]
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [desabilitado,setDesabilitado] = useState(true);
  const [erros,setErros] = useState(0);
  const [gabarito, setGabarito] = useState(palavras[Math.floor(Math.random() * (palavras.length -1))]);
  const [palavra,setPalavra] = useState('');
  const [forca,setForca] = useState(forcas[erros]);

  return (
    <>
      <Jogo 
        img = {forca}
        desabilitado = {desabilitado}
        setDesabilitado = {setDesabilitado}
        palavra = {palavra}
        setPalavra = {setPalavra}
        erros = {erros}
        setErros = {setErros}
        gabarito ={gabarito}
        setGabarito = {setGabarito}
      >
      </Jogo>
      <Letras alfabeto = {alfabeto} desabilitado = {desabilitado}></Letras>
    </>
  );
}
