import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render () {
        return (
            <div className="Header">
                <h1>Wired Brain Coffee Shop</h1>
                <img src="images/coffee.jpg" alt="exterior of cafe with tables and bikes"/>
            </div>
        )
    }
}

export default Header;