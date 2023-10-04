import { useState } from 'react';

export const AddCategory = ({ onSetCategories }) => {
    const [inputValue, setInputValue] = useState('Dragon Ball');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) {
            return;
        }
        onSetCategories((categories) => [inputValue, ...categories]);
        setInputValue('');
    };

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" placeholder="Buscar GIFs" onChange={(e) => onInputChange(e)} value= {inputValue} />
        </form>
    );
};
