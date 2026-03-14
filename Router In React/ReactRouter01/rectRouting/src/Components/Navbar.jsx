import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const navbar = () => {

  return (
    <>
      <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to='/products'><li>Products</li></Link>
        </ul>
        <button>Get Started </button>
      </div> 
    </>
  );
};

export default navbar;