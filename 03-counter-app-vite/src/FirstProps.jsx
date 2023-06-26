//rafc = Short cut para crear un componente
import PropTypes from 'prop-types';

export const FirstProps = ({title, subTitle}) => {
    console.log(title);
    console.log(subTitle + 1);
}

FirstProps.propTypes = {
    title: PropTypes.string.isRequired, //Propiedad de tipo string y obligatoria
    subTitle: PropTypes.number
}