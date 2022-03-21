import './styles/App.css';
import { Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Header from './components/Header'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'

function App() {
  return (
    <div className="App">
    <Header />
    <Route exact path = '/' component = {Home} />
    <Route path = '/Projects/' component = {Projects} />
    <Route path = '/Contact' component = {Contact} />
    <Route path = '/About' component = {About} />

    </div>
  );
}

export default App;
