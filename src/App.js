import { Routes, Route } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Header from './components/Header';
import Quotes from './pages/Quotes';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => (
  <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
