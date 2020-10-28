import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const Header = () => {
  return <h1>X-files Search<br /><Link to="/">Home</Link></h1>;
};

export default Header;
