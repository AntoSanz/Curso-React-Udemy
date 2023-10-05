import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    //TODO: MALA PRACTICA QUE RESOLVER
    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
        </>
    );
};
