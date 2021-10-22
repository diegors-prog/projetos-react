import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import styles from './Footer.module.css';
import { ReactComponent as Feed } from '../Assets/ionic-md-home.svg';
import { ReactComponent as Profile } from '../Assets/cassio.svg';
import { ReactComponent as CreatePublication } from '../Assets/material-add-to-photos.svg';

const Footer = () => {
  const { login } = React.useContext(UserContext);

  return (
    <footer className={styles.footer}>
      {login && (
        <nav className={`${styles.nav} container`}>
          <Link to="/">
            <Feed />
          </Link>
          <Link to="/create-publication">
            <CreatePublication />
          </Link>
          <Link to="/profile">
            <Profile />
          </Link>
        </nav>
      )}
    </footer>
  );
};

export default Footer;
