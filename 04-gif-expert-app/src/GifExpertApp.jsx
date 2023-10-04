import { useState } from 'react';

export const GifExpertApp = () => {
    //useStateSnippet
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        let newCategory = 'One Piece';
        // setCategories(c => [c, newCategory]);
        setCategories([...categories, newCategory]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <button onClick={onAddCategory}>Añadir</button>
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};
