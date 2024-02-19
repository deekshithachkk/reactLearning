import logo from './logo.svg';
import './App.css';
import Header from './components/responsiveNav/Header';
import Slide from './components/Carousel/Slide';
import TransitionHook from './components/Transition/TransitionHook';
import UseDeffered from 'components/UseDeffered';
import Greeting from 'components/Greeting/Greeting';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Slide /> */}
      {/* <TransitionHook /> */}
     <Greeting name="Jhon!" />
    </div>
  );
}

export default App;
