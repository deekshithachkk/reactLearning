import logo from './logo.svg';
import './App.css';
import Header from './components/responsiveNav/Header';
import Slide from './components/Carousel/Slide';
import TransitionHook from './components/Transition/TransitionHook';
import UseDeffered from 'components/UseDeffered';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Slide /> */}
      {/* <TransitionHook /> */}
      <Counter />
    </div>
  );
}

export default App;
