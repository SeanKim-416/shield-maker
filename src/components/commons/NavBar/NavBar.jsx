import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/logo.png';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span className={styles.title}>
          <img src={LogoImg} alt="로고" />
          Shield Maker
        </span>
      </Link>
    </header>
  );
}

export default NavBar;
