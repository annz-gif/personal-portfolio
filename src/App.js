import logo from './logo.svg';
import './App.scss';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Layout  from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} ></Route>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />

    </Routes>
    </>
  );
}

export default App;
