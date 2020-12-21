import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render () {
        return (
            <div>
            <button className='location-button' onClick={this.props.handleClick} value={this.props.location}>{this.props.location ? this.props.location : "All Locations"}</button>
            </div>
        )
    }
}

export default Button;