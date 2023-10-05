import { useState } from 'react';
import { AddCategory } from './styles/components/AddCategory';

export const GifExpertApp = () => {
    //useStateSnippet
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        //Detectar elementos repetidos
        // if (categories.includes(newCategory)) return;
        if (!hasDuplicates(categories)) return;
        setCategories([newCategory, ...categories]); //Añade al principio de la lista una categoría
    };

    const hasDuplicates = (array) => {
        //Si tiene duplicados devuelve false
        const duplicates = new Set(array).size < array.length;
        console.log(`No hay duplicados: ${duplicates}`);
        return duplicates;
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // onAddCategory={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de GIFs */}
            <button onClick={onAddCategory}>Añadir</button>
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};
