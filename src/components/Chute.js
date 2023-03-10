import { useState } from "react";

export default function Chute(props){
    const [chute, setChute] = useState("");
    const desabilitado = props.desabilitado;

    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    function chutar(){
        const chuteLowCase = chute.split("").map((c) => c.toLowerCase());
        if(arrayEquals(chuteLowCase, props.gabarito)){
            props.setDesabilitado(true);
            props.setPalavra(props.gabarito);
            props.setFim("verde");
            props.setResetar(true);
        }else{
            const maxErros = 6;
            props.setPalavra(props.gabarito);
            props.setDesabilitado(true);
            props.setFim("vermelho");
            props.setResetar(true);
            props.setErros(maxErros);
        }
        setChute("");
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled = {desabilitado} value={chute} onChange={(event) => setChute(event.target.value)}></input>
            <button 
                data-test="guess-button"
                className={desabilitado ? "chutar-button" : "chutar-button habilitada"}
                disabled = {props.desabilitado}
                onClick={chutar}
            >
                Chutar
            </button>
        </div>
    );
}