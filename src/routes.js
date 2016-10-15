import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import GigsPage from './components/gigs/GigsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage}/>
        <Route path="gigs" component={GigsPage}/>
    </Route>
);
