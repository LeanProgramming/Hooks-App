import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickFocus = () => {
        // console.log(inputRef);
        inputRef.current?.select();
    };


    return (
        <>
            <h1>FocusScreen</h1>
            <hr className="my-2" />
            <input
                ref={inputRef}
                className="form-control m-2"
                type="text"
                placeholder="Ingrese su nombre"
            />
            

            <button className="btn btn-primary m-2" onClick={onClickFocus}>Set Focus</button>
        </>
    )
}
