import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
//import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "} 
      <Link to="/products" activeClassName="active">Products</Link>
      {" | "} 
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

//Header.propTypes = {
//  loading: PropTypes.bool.isRequired
//};

     // {loading && <LoadingDots interval={100} dots={20}/>} 
export default Header;
