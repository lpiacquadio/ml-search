import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise'

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from './state/reducers';

import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';

import './styles.css';
import 'normalize.css';
import 'react-flexbox-grid/dist/react-flexbox-grid.css';

import SearchBar from './components/SearchBar';
import Home from './containers/Home';
import ItemList from './containers/ItemList';
import ItemDetail from './containers/ItemDetail';

const rootElement = document.getElementById('root');
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    applyMiddleware(middleware, promiseMiddleware),
);  

store.subscribe(() =>
    console.log('State changed: ', store.getState())
);

const App = styled.div`
    background-color: #EEEEEE;
    min-height: 100vh;
`;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <App>
                <SearchBar />
                <Route exact path="/" component={Home} />
                <Route path="/items" component={ItemList} />
                <Route path="/items/:id" component={ItemDetail} />
            </App>
        </ConnectedRouter>
    </Provider>,
    rootElement
);
registerServiceWorker();
