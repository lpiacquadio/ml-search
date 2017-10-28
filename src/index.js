import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';

import 'normalize.css';
import 'react-flexbox-grid/dist/react-flexbox-grid.css'

import SearchBar from './components/SearchBar';
import Home from './containers/Home';
import ItemList from './containers/ItemList';
import ItemDetail from './containers/ItemDetail';

const history = createBrowserHistory();

const App = styled.div`
    background-color: #EEEEEE;
    min-height: 100vh;
`;

ReactDOM.render((
    <Router history={history}>
        <App>
            <SearchBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/items" component={ItemList} />
            <Route exact path="/items/:id" component={ItemDetail} />
        </App>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
