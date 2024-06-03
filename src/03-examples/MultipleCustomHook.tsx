import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHook = () => {

    const {counter, increment, decrement} = useCounter(1);
    const { data, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>MultipleCustomHook</h1>
            <h2>Información de un Pokemon</h2>

            <hr className='m-3' />

            { isLoading 
                ? <LoadingMessage />
                : <PokemonCard
                    id={counter}
                    name={data?.name!}
                    sprites= {[
                        data!.sprites.front_default,
                        data!.sprites.front_shiny,
                        data!.sprites.back_default,
                        data!.sprites.back_shiny
                    ]}
                />
            }

            <button onClick={() => decrement(1,1)} className='btn btn-outline-primary m-2'>Anterior</button>
            <button onClick={() => increment()} className='btn btn-outline-primary m-2'>Siguiente</button>

        </>
    )

}


