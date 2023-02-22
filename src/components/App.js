import { useState } from "react";
import Jogo from "./Jogo";
import "../css/reset.css";
import "../css/style.css";
import { Letras } from "./Letras";
import palavras from '../palavras'

export default function App() {
  const forcas = ["forca0.png","forca1.png","forca2.png","forca3.png","forca4.png","forca5.png","forca6.png"]
  const [forca,setForca] = useState(forcas[0]);
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  console.log(palavras);
  return (
    <>
      <Jogo img = {forca}></Jogo>
      <Letras alfabeto = {alfabeto}></Letras>
    </>
  );
}

