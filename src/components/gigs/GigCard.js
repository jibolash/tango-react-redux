import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const GigCard = ({gig}) => {
    return (
        <div>
            {gig.title} in {gig.category.name}
        </div>
    );
}

GigCard.propTypes = {
    gig: PropTypes.object.isRequired
}

export default GigCard;
