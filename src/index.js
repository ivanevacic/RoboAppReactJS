import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons' //  Imported 'tachyons CSS'
import { robots } from './robots' //  Imported robots from './robots'

ReactDOM.render(
                <CardList robots={robots} />
, document.getElementById('root'));
registerServiceWorker();
