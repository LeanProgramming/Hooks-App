import { FormEvent } from 'react';
import { useForm } from '../../hooks';
import { IState } from '../types';

interface IToDoAdd {
    onNewTodo: (newToDo: IState) => void
}

export const ToDoAdd = ({ onNewTodo }: IToDoAdd) => {

    const {description, onInputChange, onResetForm} = useForm({
        description: '',
    });
    
    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        if(description!.length <= 1) return;

        const newToDo: IState= {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo && onNewTodo(newToDo);
        
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="¿Qué hay que hacer?"
                name="description"
                value={description}
                onChange={onInputChange}
            />


            <button
                type="submit"
                className="btn btn-outline-success mt-2"
            >
                Agregar
            </button>

        </form>
    )
}
