import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import App2 from './App2';
import App3 from './App3';

const history = createBrowserHistory()

ReactDOM.render((
    <Router history={history}>
        <div>
            Barra de busqueda
            <Route exact path="/" component={App}/>
            <Route exact path="/items" component={App2}/>
            <Route exact path="/items/:id" component={App3}/>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
