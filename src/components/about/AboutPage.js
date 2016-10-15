import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>YOU are good at something, and believe it or not, somebody, somewhere is ready to pay you for that skill/ability.</p>
                <h3>Boost Your Resume/Street Cred</h3>
                <p>Tango is an easy way to gain relevant work experience doing stuff you love while mastering it at the same time. You have nothing to lose!.</p>
                <h3>Will I get Quality for My Money?</h3>
                <p>There is only one way to find out...Try! Dont worry, you get your money back if you are not satisfied with services offered. Guaranteed.</p>
                <h3>What Can I offer?</h3>
                <p>Can you design an eye catching logo for someone? Can you mix and master a song? Can you read people{`'`}s destiny? There is a place for everyone on Tango!</p>
            </div>
        );
    }
}

export default AboutPage;
