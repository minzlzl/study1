import './App.scss';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './page/Home';
import Basic from './page/Basic';
import Input1 from './page/Input1';
import Input2 from './page/Input2';
import Effect from './page/Effect';
import Basic2 from './page/Basic2';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/basic">Basic</Link>
        <Link to="/basic2">Basic2</Link>
        <Link to="/input1">Input1</Link>
        <Link to="/input2">Input2</Link>
        <Link to="/useEffect">Effect</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basic" element={<Basic/>}/>
        <Route path="/basic2" element={<Basic2/>}/>
        <Route path="/input1" element={<Input1/>}/>
        <Route path="/input2" element={<Input2/>}/>
        <Route path="/useEffect" element={<Effect/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
