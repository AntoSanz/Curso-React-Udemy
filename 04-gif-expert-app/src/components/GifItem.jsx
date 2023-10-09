import PropTypes from 'prop-types';

export const GifItem = ({ title, url} ) => {
    return (
        <>
            <div className="card">
              <img src={url} alt={title}/>
              <p data-testid="test-title">{title}</p>
            </div>
        </>
    );
};

GifItem.PropTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}