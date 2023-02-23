export function Letras(props){
    const letras = props.alfabeto;
    return(
        <ul className="letras">
            {letras.map((l) => <Letra key = {l} letra = {l} desabilitado = {props.desabilitado}></Letra>)}
        </ul>
    );
}

function Letra(props){
    const letra = props.letra;
    const desabilitado = props.desabilitado;
    return(
        <li >
            <button className={desabilitado ? "letra" : "letra habilitada"} disabled={desabilitado} onClick={() => alert(letra)} >
                {letra.toUpperCase()}
            </button>
        </li>
    )
}