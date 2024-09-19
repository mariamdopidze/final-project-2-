import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Counter from './pages/Counter';
import { store } from './store/Store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <div >
  <Header/>
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
      
    </div>
    </Provider>
  );
}

export default App;
