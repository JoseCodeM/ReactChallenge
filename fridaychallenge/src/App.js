import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/Home" component={Home} exact/>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Routes>
    </Router>
  );
}

export default App;
