import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button
                className="btn btn-outline-success"
                onClick={() => setUser({id:123, username:'Juan Perez', email:'juanperez@gmail.com'})}
            >
                Ingresar usuario
            </button>
        </>
    )
}
