import React, {Component} from 'react';
import s from './ProfilePage.module.css';
import {NavLink} from "react-router-dom";

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