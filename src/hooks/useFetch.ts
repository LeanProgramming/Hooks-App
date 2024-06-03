import { useEffect, useState } from "react";

interface IErrorFetch {
    code: number,
    message: string,
}

interface IDataFetch {
    id: number;
    name: string;
    sprites: IPokemonSprite;
}

interface IPokemonSprite {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
}

interface IUseFetch {
    data: IDataFetch | null;
    isLoading: boolean;
    hasError: boolean;
    error: IErrorFetch | null;
}

interface ILocalCache {
    [url:string]: IDataFetch | null;
}

const localCache: ILocalCache = {url: null};

export const useFetch = (url: string) => {

    const [state, setState] = useState<IUseFetch>({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error:null
        })
    }
    
    const getFetch = async () => {

        if(localCache[url]) {
            console.log('Usando caché');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return;
        }

        setLoadingState();

        const resp = await fetch(url);

        //sleep
        await new Promise( resolve => setTimeout(resolve, 1500));

        if(!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });

            return;
        }

        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null,
        });

        //Manejo del caché
        localCache[url] = data;
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError

    };
}
