import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Slide from './components/Carousel/Slide';
import Header from './components/responsiveNav/Header';
import { FiHome } from 'react-icons/fi';
import Home from 'Pages/Home';
import React from 'react';
import AddTodo from 'components/AddTodo';
import store from './redux/store';
import { Provider } from 'react-redux';
import Todos from 'components/Todo';
import CakeComp from 'components/CakeComp';
const MyLazyComponent = React.lazy(() => import('./components/Carousel/Slide'));

function App() {
  
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <React.Suspense fallback={<h1>Loading....</h1>}> */}
        {/* <MyLazyComponent/>
      </React.Suspense> */}
      {/* <Slide /> */}
      <Provider store={store}>
        <CakeComp />
        {}
      {/* <AddTodo />
      <Todos /> */}
      </Provider>
    </div>
  );
}

export default App;
