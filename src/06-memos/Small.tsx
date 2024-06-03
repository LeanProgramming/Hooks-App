import React from 'react';


interface ISmall {
    value: number
}

export const Small = React.memo(({ value }: ISmall) => {

    console.log('Me estoy renderizando');

    return (
        <small>{value}</small>
    )
})
