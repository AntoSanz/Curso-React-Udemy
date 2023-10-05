import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('Dragon Ball');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // onSetCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar GIFs"
                onChange={(event) => onInputChange(event)}
                value={inputValue}
            />
        </form>
    );
};
