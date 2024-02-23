import React from 'react';
import RoutePath from 'routes/RoutePath';
import './App.css';
import NavBar from 'components/Auth/NavBar';
const MyLazyComponent = React.lazy(() => import('./components/Carousel/Slide'));

function App() {
  
  return (
    <div className="App">
     
      {/* <Provider store={store}>
        <CakeComp />
        <HookCakeComp />
        <IceCreamComp/>
        <NewCakeComp/>
        <ItemContainerComp cake/>
        <ItemContainerComp />
      </Provider> */}
     <NavBar />
     <RoutePath />
    </div>
  );
}

export default App;
