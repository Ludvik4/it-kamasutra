import React from 'react';
import classNames from 'classnames/bind';

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

import styles from './App.module.css';
const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('root')}>
      <div className={cx('header')}>
        <Header />
      </div>
      <div className={cx('navbar')}>
        <Navbar />
      </div>
      <div className={cx('content')}>
        <ProfilePage />
      </div>
      <div className={cx('footer')}>
      footer
      </div>
    </div>
  );
}

export default App;
