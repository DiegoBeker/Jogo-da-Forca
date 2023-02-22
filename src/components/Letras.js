export function Letras(){
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    return(
        <ul className="letras">
            {letras.map((l) => <Letra letra = {l}></Letra>)}
        </ul>
    );
}

function Letra(props){
    return(
        <li className="letra">
            <p>{props.letra}</p>
        </li>
    )
}