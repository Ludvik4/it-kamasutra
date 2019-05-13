import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import {NavLink} from "react-router-dom";

import styles from './Navbar.module.css';
const cx = classNames.bind(styles);

const navItems = [ 
    {path: '/profile', title: 'Profile'},
    {path: '/dialogs', title: 'Dialogs'} 
];

export default class Navbar extends Component {
    static propTypes = {};
    static defaultProps = {};
    
    renderItem = (item) => (
        <div className={cx('item')}>
            <NavLink to={item.path} activeClassName={cx('activeLink')}>{item.title}</NavLink>
        </div>
    );

    render() {
        return <nav className={cx('nav')}>
           {navItems.map(this.renderItem())}
        </nav>
    }
   
}
