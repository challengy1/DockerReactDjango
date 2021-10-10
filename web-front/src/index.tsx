import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { store, history } from './Store/store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
