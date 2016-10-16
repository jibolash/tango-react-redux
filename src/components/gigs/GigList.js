import React, {PropTypes} from 'react';
import GigCard from './GigCard';

const GigList = ({gigs}) => {
    return (
        <div>
            {gigs.map(gig =>
                <GigCard key={gig._id} gig={gig} />
            )}
        </div>
    );
}

GigList.propTypes = {
    gigs: PropTypes.array.isRequired
}

export default GigList;
