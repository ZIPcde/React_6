// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>My Product App</h1>
        <ProductForm />
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;