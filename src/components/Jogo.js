export default function Jogo(props){
    return(
        <div className="jogo">
            <img src= {`assets/images/${props.img}`}/>
            <div>
            <button className="botao-palavra">Escolher Palavra</button>
            <p className="palavra">Palavra</p>
            </div>
        </div>
    );
}