import React, {Component} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const navItems = [ 
    {path: '/profile', title: 'Profile'},
    {path: '/dialogs', title: 'Dialogs'} 
];

export default class Navbar extends Component {
    renderItem = (item) => (
        <div className={s.item}>
            <NavLink to={item.path} activeClassName={s.activeLink}>{item.title}</NavLink>
        </div>
    );

    render() {
        return <nav className={s.nav}>
           {navItems.map(this.renderItem())}
        </nav>
    }
   
}
