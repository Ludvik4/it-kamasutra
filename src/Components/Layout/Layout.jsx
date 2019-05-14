import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames/bind';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from './Layout.module.css';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
  return (
    <div className={cx('root')}>
      <div className={cx('header')}>
        <Header/>
      </div>
      <div className={cx('navbar')}>
        <Navbar/>
      </div>
      <div className={cx('content')}>
        {children}
      </div>
      <div className={cx('footer')}>
        footer
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: pt.node,
};

export default Layout;
