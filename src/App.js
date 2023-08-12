import logo from './logo.svg';
import './App.css';
import Header from './header'
import Info from './infosection'
import Footer from './footer'
import Tech from './technnology'
import Products from './products'
import References from './references'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Routes>
          <Route exact path="/" element={<div><Header /><Info /><Footer /></div>} />
          <Route exact path="/technology" element={<Tech />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/references" element={<References />} />
        </Routes>
      </Router>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}

    </div>
  );
}

export default App;
