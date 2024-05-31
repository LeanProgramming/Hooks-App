import { useState } from "react";

interface IUseForm {
    username?: string;
    email?: string;
    password?: string;
}


export const useForm = (initialForm: IUseForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    };


    return {
        ...formState,
        formState,
        onInputChange,
    };
}
