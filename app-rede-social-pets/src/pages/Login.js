import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CreateAccount from '../components/Account/Create-account/CreateAccount';
import LoginForm from '../components/Account/Login-form/LoginForm';
import LoginPasswordLost from '../components/Account/Login-password-lost/LoginPasswordLost';
import LoginPasswordReset from '../components/Account/Login-password-reset/LoginPasswordReset';
import { UserContext } from '../UserContext';
import styles from './Login.module.css';

function Login() {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<CreateAccount />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
