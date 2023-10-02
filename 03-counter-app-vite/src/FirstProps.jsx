//rafc = Short cut para crear un componente
import PropTypes from 'prop-types';

export const FirstProps = ({title, age, name}) => {
    return(
        <>  
            <h1>{title}</h1>
            <p>{name}</p>
            <p>Edad: {age}</p>
            
        </>
    );
}

FirstProps.propTypes = {
    subTitle: PropTypes.number, //Propiedad de tipo number no obligatoria
    name: PropTypes.string, //Propiedad de tipo string y obligatoria
    title: PropTypes.string.isRequired,
}

FirstProps.defaultProps = {
    // name: 'No hay nombre',
    // age: 'No hay subtítulo',
    // title: 'No hay ningún título.',
}