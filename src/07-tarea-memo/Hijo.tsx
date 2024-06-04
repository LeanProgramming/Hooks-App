import React from 'react';

interface IHijo {
    numero: number;
    incrementar: (numero:number)=>void;
}

export const Hijo = React.memo(({ numero, incrementar }: IHijo) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary me-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
