import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const GigCard = ({gig}) => {
    return (
        <div>
            <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img src={gig.imageUrl}/>
                  <div className="caption">
                    <strong className="test">{gig.title.slice(0, 40)}</strong>
                    <p><a href="#"><span className="glyphicon glyphicon-heart"></span></a></p>
                  </div>
                </div>
              </div>
        </div>
    );
}

GigCard.propTypes = {
    gig: PropTypes.object.isRequired
}

export default GigCard;
