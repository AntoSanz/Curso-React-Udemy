import { useState } from 'react';
import { AddCategory } from './styles/components/AddCategory';

export const GifExpertApp = () => {
    //useStateSnippet
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    // const onAddCategory = () => {
    //     let newCategory = 'One Piece';
    //     // setCategories(c => [c, newCategory]);
    //     setCategories([...categories, newCategory]);
    // };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onSetCategories={setCategories}/>

            {/* Categorias */}
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};
