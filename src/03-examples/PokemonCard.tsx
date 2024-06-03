import { useLayoutEffect, useRef, useState } from "react";

interface IPokemonCard {
    id: number;
    name: string;
    sprites: string[];
}

export const PokemonCard = ({ id, name, sprites = [] }: IPokemonCard) => {

    const nameRef = useRef<HTMLHeadingElement>(null);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });


    useLayoutEffect(() => {
        const {width, height} = nameRef.current!.getBoundingClientRect();
        setBoxSize({width, height});
    }, [name])

    return (
        <>
            <section
                style={{ display: 'flex' }}
            >
                <h2 ref={nameRef} className="text-capitalize">#{id} - {name}</h2>

                {/* imagenes */}
                <div>
                    {
                        sprites.map((sprite) => (
                            <img key={sprite} src={sprite} alt={name} />
                        ))
                    }

                </div>
            </section>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
