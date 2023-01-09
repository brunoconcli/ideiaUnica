import { useState } from 'react';

function Home() {
    return ( <div>
            <h4> Bem vindo à página de contagem!</h4>
            <Contador />
        </div>
    )
}

function CapsLock(props) {
    const textoInserido = props.children;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
}



function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    function removerContador() {
        setContador(contador -1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
            <button onClick={removerContador}>Remover</button>
        </div>
    )
}

export default Home