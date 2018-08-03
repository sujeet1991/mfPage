import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './component/App/index';

render(<BrowserRouter>
<App />
</BrowserRouter>, 
document.getElementById('root'));

