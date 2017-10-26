import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

import './styles.css';
import 'normalize.css';
import 'react-flexbox-grid/dist/react-flexbox-grid.css'

import SearchBar from './SearchBar';
import Home from './Home';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const history = createBrowserHistory()

ReactDOM.render((
    <Router history={history}>
        <div className="App">
            <SearchBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/items" component={ItemList} />
            <Route exact path="/items/:id" component={ItemDetail} />
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
