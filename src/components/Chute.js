import { useState } from "react";

export default function Chute(props){
    
    const [chute, setChute] = useState("");
    
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    function chutar(){
        console.log(chute.split(""));
        console.log(props.gabarito);
        if(arrayEquals(chute.split(""), props.gabarito)){
            props.setDesabilitado(true);
            props.setPalavra(props.gabarito);
            props.setFim("verde");
            props.setResetar(true);
        }else{
            props.setPalavra(props.gabarito);
            props.setDesabilitado(true);
            props.setFim("vermelho");
            props.setResetar(true);
            props.setErros(6);
        }
        setChute("");
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled = {props.desabilitado} value={chute} onChange={(event) => setChute(event.target.value)}></input>
            <button data-test="guess-button" className="chutar-button" disabled = {props.desabilitado} onClick={chutar}>Chutar</button>
        </div>
    );
}