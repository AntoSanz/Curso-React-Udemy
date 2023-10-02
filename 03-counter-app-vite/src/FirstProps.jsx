//rafc = Short cut para crear un componente
import PropTypes from 'prop-types';

export const FirstProps = ({title, subTitle, name}) => {
    console.log(title);
    console.log(subTitle + 1);
    return(
        <>  
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
}

FirstProps.propTypes = {
    subTitle: PropTypes.number, //Propiedad de tipo number no obligatoria
    title: PropTypes.string.isRequired, //Propiedad de tipo string y obligatoria
    
}

FirstProps.defaultProps = {
    name: 'Antonio Sanz Pans',
    subTitle: 'No hay subtítulo',
    title: 'No hay ningún título.',
}