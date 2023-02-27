import palavras from '../palavras'

export default function Jogo(props){
    
    function habilitarJogo(){
        const aux = [];
        let gabarito;
        const novaPalavra = sortearPalavra();
        props.setDesabilitado(false);
        props.setErros(0);
        gabarito = novaPalavra.split('');
        gabarito.forEach(e => {aux.push('_')});
        props.setGabarito(gabarito);
        props.setPalavra(aux);
        props.setFim('');
        props.setResetar(true);
    }

    function sortearPalavra(){
        return palavras[Math.floor(Math.random() * (palavras.length - 1))]
    }

    return(
        <div className="jogo">
            <img data-test="game-image" src= {`assets/images/forca${props.img}.png`} alt="forca"/>
            <div>
            <button data-test="choose-word" onClick= {habilitarJogo} className="botao-palavra">Escolher Palavra</button>
            <p data-test="word" className={`palavra ${props.fim}`}>{props.palavra}</p>
            </div>
        </div>
    );
}