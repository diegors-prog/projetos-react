import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../components/Feed/Feed';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
    </section>
  );
}

export default Home;
