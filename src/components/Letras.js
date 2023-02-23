import { useState } from "react";

export function Letras(props){
    const letras = props.alfabeto;
    return(
        <ul className="letras">
            {letras.map((l) => 
                <Letra 
                    key = {l}
                    letra = {l}
                    desabilitado = {props.desabilitado}
                    erros = {props.erros}
                    setErros = {props.setErros}
                    gabarito = {props.gabarito}
                    palavra = {props.palavra}
                    setPalavra = {props.setPalavra}>
                </Letra>)}
        </ul>
    );
}

function Letra(props){
    const letra = props.letra;
    const desabilitado = props.desabilitado;
    const [selecionado,setSelecionado] = useState(false);
    const gabarito = props.gabarito;
    const palavra = [...props.palavra]
    
    return(
        <li >
            <button 
                className={(desabilitado || selecionado) ? "letra" : "letra habilitada"} 
                disabled={desabilitado || selecionado} 
                onClick={() => {
                    setSelecionado(true);
                    if(gabarito.includes(letra)){
                        gabarito.forEach((element, index) => {
                            if(element === letra){
                                palavra[index] = letra;
                                props.setPalavra(palavra);
                            }
                        });
                    }else{
                        props.setErros(props.erros +1);
                    }
                }}
            >
                {letra.toUpperCase()}
            </button>
        </li>
    )
}