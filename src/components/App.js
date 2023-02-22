import { useState } from "react";
import Jogo from "./Jogo";
import "../css/reset.css";
import "../css/style.css";
import { Letras } from "./Letras";

export default function App() {
  const forcas = ["forca0.png","forca1.png","forca2.png","forca3.png","forca4.png","forca5.png","forca6.png"]
  const [forca,setForca] = useState(forcas[0]);

  return (
    <>
      <Jogo img = {forca}></Jogo>
      <Letras></Letras>
    </>
  );
}

