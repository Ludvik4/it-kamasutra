import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Header.module.css';
const cx = classNames.bind(styles);

const Header = ({ imgUrl }) => {
    return <header className={cx('header')}>
        <img src={imgUrl} />
    </header>
}

Header.propTypes = {
    imgUrl: pt.string
}
Header.defaultProps = {
    imgUrl: 'https://www.freelogodesign.org/Content/img/logo-ex-7.png'
}

export default Header;