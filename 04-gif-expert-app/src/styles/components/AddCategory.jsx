import { useState } from 'react';

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('Dragon Ball');

    const onInputChange = ({ target }) => {
        console.log(target.value);
        setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" placeholder="Buscar GIFs" onChange={(e) => onInputChange(e)} />
        </form>
    );
};
