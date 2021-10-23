import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../components/Feed/Feed';
import CreatePublication from '../components/CreatePublication/CreatePublication';
import Profile from '../components/Profile/Profile';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/create-publication" element={<CreatePublication />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </section>
  );
}

export default Home;
