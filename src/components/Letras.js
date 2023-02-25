import { useState } from "react";

export function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <ul className="letras">
            {alfabeto.map((l) =>
                <Letra
                    key={l}
                    letra={l}
                    desabilitado={props.desabilitado}
                    setDesabilitado={props.setDesabilitado}
                    erros={props.erros}
                    setErros={props.setErros}
                    gabarito={props.gabarito}
                    palavra={props.palavra}
                    setPalavra={props.setPalavra}
                    setFim={props.setFim}
                    resetar={props.resetar}
                    setResetar={props.setResetar}>
                </Letra>)}
        </ul>
    );
}

function Letra(props) {
    const letra = props.letra;
    const desabilitado = props.desabilitado;
    const [selecionado, setSelecionado] = useState(false);
    const gabarito = props.gabarito;
    const palavra = props.palavra;
    const resetar = props.resetar;
    const setResetar = props.setResetar;


    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    function verificaLetra() {
        if (resetar && selecionado) {
            setSelecionado(false);
        }
        return selecionado;
    }


    return (
        <li>
            <button
                data-test = "letter"
                className={desabilitado || verificaLetra() ? "letra" : "letra habilitada"}
                disabled={desabilitado || verificaLetra()}
                onClick={() => {
                    setSelecionado(true);
                    if (gabarito.includes(letra)) {
                        let aux;
                        gabarito.forEach((element, index) => {
                            if (element === letra) {
                                palavra.splice(index, 1, letra);
                                aux = [...palavra];
                                props.setPalavra(aux);
                            }
                        });
                        if (arrayEquals(aux, gabarito)) {
                            props.setDesabilitado(true);
                            props.setFim("verde");
                            setResetar(true);
                        }
                    } else {
                        const erros = props.erros + 1;
                        props.setErros(erros);
                        if (erros === 6) {
                            props.setPalavra(props.gabarito);
                            props.setDesabilitado(true);
                            props.setFim("vermelho");
                            setResetar(true);
                        }
                    }
                    setResetar(false);
                }}
            >
                {letra.toUpperCase()}
            </button>
        </li>
    )
}