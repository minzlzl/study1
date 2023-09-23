import './App.scss';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './page/Home';
import Basic from './page/Basic';
import Input1 from './page/Input1';
import Input2 from './page/Input2';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/basic">Basic</Link>
        <Link to="/input1">Input1</Link>
        <Link to="/input2">Input2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basic" element={<Basic/>}/>
        <Route path="/input1" element={<Input1/>}/>
        <Route path="/input2" element={<Input2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
