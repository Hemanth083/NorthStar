import './App.css';
import About from './Pages/about'
import Project from './main';
import Cart from "./Pages/cart"
import Contact from "./Pages/contact"

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

