export function Letras(props){
    const letras = props.alfabeto;
    return(
        <ul className="letras">
            {letras.map((l) => <Letra key = {l} letra = {l}></Letra>)}
        </ul>
    );
}

function Letra(props){
    const letra = props.letra;
    return(
        <li >
            <button className="letra" disabled="" onClick={() => alert(letra)} >
                {letra.toUpperCase()}
            </button>
        </li>
    )
}