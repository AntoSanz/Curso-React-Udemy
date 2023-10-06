//rafc = Short cut para crear un componente
import PropTypes from 'prop-types';

export const FirstProps = ({title, age, name}) => {
    return(
        <>  
            <h1 data-testid="test-title">{title}</h1>
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
    // title: 'No hay ningún título.',
}