//rafc = Short cut para crear un componente
import PropTypes from 'prop-types';

export const FirstProps = ({title, subTitle}) => {
    console.log(title);
    console.log(subTitle + 1);
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