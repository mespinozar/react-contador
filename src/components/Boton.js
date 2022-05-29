import React from 'react';
import '../styles/Button.css';

function Button({ texto, esBotonDeClick, manejarClick }) {
    return (
        <button className={ esBotonDeClick ? 'boton-clic' : 'boton-reiniciar' } onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default Button;