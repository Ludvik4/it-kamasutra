import React, {Component} from 'react';
import pt from 'prop-types';
import classNames from 'classnames/bind';

import { NAVLIST } from './constants';

import styles from './Navbar.module.css';
const cx = classNames.bind(styles);

export default class Navbar extends Component {
    static propTypes = {};
    static defaultProps = {};

    renderItem = (item) => (
        <div className={cx('item')} key={item.path}>
            <a href={item.path} className={cx('activeLink')}>{item.title}</a>
        </div>
    );

    render() {
        return <nav className={cx('nav')}>
            {NAVLIST.map(this.renderItem)}
        </nav>
    }
   
}
