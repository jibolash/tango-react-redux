import React, {PropTypes} from 'react';
import GigCard from './GigCard';

const GigList = ({gigs}) => {
    return (
        <div>
            <div className="row">
                {gigs.map(gig => <GigCard key={gig._id} gig={gig} /> )}
            </div>
        </div>
    );
}

GigList.propTypes = {
    gigs: PropTypes.array.isRequired
}

export default GigList;
