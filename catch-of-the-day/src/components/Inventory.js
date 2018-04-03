import React from 'react';
import AddFishform from './AddFishForm';




class Inventory extends React.Component {
    render() {
        return (
        <div className='inventory'>
        <h2>Inventory</h2>
        <AddFishform addFish={this.props.addFish} />
        <button onClick= {this.props.loadSampleFsishes}>Load Sample Fishes</button>
        </div>
        );
    }
}

export default Inventory;