import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gigActions from '../../actions/gigActions';
import GigList from './GigList';

class GigsPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    render() {
        const {gigs} = this.props;
        return (
            <div>
                <h1>Gigs</h1>
                <GigList gigs={gigs}/>
            </div>
        );
    }
}

GigsPage.propTypes = {
    gigs: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        gigs: state.gigs
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(gigActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GigsPage);
