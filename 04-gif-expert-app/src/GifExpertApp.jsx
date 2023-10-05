import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //useStateSnippet
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        //Detectar elementos repetidos
        // if (categories.includes(newCategory)) return;
        if (hasDuplicates(categories, newCategory)) return;
        setCategories([newCategory, ...categories]); //Añade al principio de la lista una categoría
    };

    const hasDuplicates = (array, el) => {
        el = el.toLowerCase();
        const duplicates = array.map((e) => e.toLowerCase()).includes(el);
        console.log(`Hay duplicados: ${duplicates}`);
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
            <ol>
                {categories.map((category) => (
                    // <div key={category}>
                    //     <h3>{category}</h3>
                    //     <li>{category}</li>
                    // </div>
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
