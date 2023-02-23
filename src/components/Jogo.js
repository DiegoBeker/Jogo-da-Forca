import palavras from '../palavras'

export default function Jogo(props){
    
    function habilitarJogo(){
        const aux = [];
        let gabarito;
        const novaPalavra = sortearPalavra();
        props.setDesabilitado('');
        props.setErros(0);
        props.setGabarito(novaPalavra);
        gabarito = novaPalavra.split('');
        gabarito.forEach(e => {aux.push('_')});
        props.setPalavra(aux);
    }

    function sortearPalavra(){
        return palavras[Math.floor(Math.random() * (palavras.length -1))]
    }

    return(
        <div className="jogo">
            <img src= {`assets/images/${props.img}`}/>
            <div>
            <button onClick= {habilitarJogo} className="botao-palavra">Escolher Palavra</button>
            <p className="palavra">{props.palavra}</p>
            </div>
        </div>
    );
}