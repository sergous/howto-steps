import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const wrapper = (
        <Provider rootStore={{}}>
            <App />
        </Provider>
    );
    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
});
