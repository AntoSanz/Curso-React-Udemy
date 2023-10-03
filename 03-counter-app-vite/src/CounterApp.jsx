import { useState } from 'react'; //Importar hook useState. Los hook en react siempre empiezan por use.
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    console.log('render');
    
    const [counter, setCounter] = useState(value); //Primer valor es el valor que declaramos en useState(AQUI) y el segundo el metodo que se va a utilizar para modificar ese valor
    
    const handleAdd = () => {
        setCounter((c) => c + 1);  
    };

    const handleSubstract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(value);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
CounterApp.defaultProps = {
    value: 0,
}

