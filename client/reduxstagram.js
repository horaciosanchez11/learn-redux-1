// let's go!
import React from 'react';
import {render} from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';
import App from './components/App';
import Raven from 'raven-js';
import {sentry_url, logException} from './data/config';

Raven.config(sentry_url, {
    tags: {
        git_commit: 'ijsdald',
        userLevel: 'editor'
    }
}).install();

/*logException(new Error('download failed'), {
    email: 'test@test.com'
});*/

/*Raven.captureMessage('Something happened');
Raven.showReportDialog();*/

const router = (
    <Provider store={store}>    
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));