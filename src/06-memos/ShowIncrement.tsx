import React from 'react';

interface IShowIncrement {
    increment: () => void;
}

export const ShowIncrement = React.memo(({ increment }: IShowIncrement) => {

    console.log('Me volví a generar');
    

    return (
        <button
            className="btn btn-outline-success"
            onClick={() => increment()}
        >
            Incrementar
        </button>
    )
})
