import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { username, email, password, onInputChange } = useForm({
        username: '',
        email: '',
        password: ''
    });


    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr className="my-3" />

            <input
                type="text"
                className="form-control mx-2"
                name="username"
                placeholder="Username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control m-2"
                name="email"
                placeholder="User Email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control m-2"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={onInputChange}
            />

            {
                username === 'nemezia' && <Message />
            }
        </>
    )
}
