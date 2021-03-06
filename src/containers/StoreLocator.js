import React, { Component } from 'react';
import Header from "../components/Header";
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser'

class StoreLocator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMap: 'none.jpg'
        }
        this.shops = [{
            location: 'STP',
            neighborhood: 'Highland Park'
        },
        {
            location: 'MPLS',
            neighborhood: 'Longfellow'
        },
       ]

       this.chooseMap = this.chooseMap.bind(this);
    }

    chooseMap(e) {
        this.setState({currentMap: mapChooser(e.target.value)})
    }

    render() {
        let storeButtons = this.shops.map((shop, id) => {
            return (<Button key={id} handleClick={this.chooseMap} location={shop.location} />)
        });

        return (<div>
            <Header />
            {storeButtons}
            <Map imageName = {this.state.currentMap} location = {this.props.location} />
        </div>);
    }
}

export default StoreLocator;