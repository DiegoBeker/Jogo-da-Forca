import palavras from '../palavras'

export default function Jogo(props){
    
    function habilitarJogo(){
        const aux = [];
        let gabarito;
        const novaPalavra = sortearPalavra();
        props.setDesabilitado('');
        props.setErros(0);
        gabarito = novaPalavra.split('');
        gabarito.forEach(e => {aux.push('_')});
        console.log(gabarito);
        console.log(aux);
        props.setGabarito(gabarito);
        props.setPalavra(aux);
    }

    function sortearPalavra(){
        return palavras[Math.floor(Math.random() * (palavras.length -1))]
    }

    return(
        <div className="jogo">
            <img src= {`assets/images/forca${props.img}.png`}/>
            <div>
            <button onClick= {habilitarJogo} className="botao-palavra">Escolher Palavra</button>
            <p className="palavra">{props.palavra}</p>
            </div>
        </div>
    );
}