import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';


function Navbar(){
    return(
      <header>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div id="rabbit-char">
        <div id="hero-text">
          <h2>Welcome to my Blog!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <input type="email" placeholder="Insert an email"/> 
          <button>Subsicribe</button>
        </div>
        <Spline scene="https://prod.spline.design/80sgy3OyNajfzuUr/scene.splinecode" />
      </div>
      </header>
    );
}

export default Navbar;