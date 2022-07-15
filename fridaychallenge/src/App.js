import './App.css';
import Home from "./components/Home"
import About from "./components/about"
import Contact from './components/Contact';
import Navbar from './components/navbar';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About} exact/>
      <Route path="/contact" component={Contact} exact/>
    </Switch>
    </>
  );
}

export default App;
