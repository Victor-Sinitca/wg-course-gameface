import React, {h, render, Component } from 'react';
import Potion from '../potion';

class Potions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            healthPotion: 1,
            energyPotion: 1
        };
    }

    render() {
        return (
            <div>
                <div id="potion_bar" className="potion-bar-animation potion-bar-layout potion-bar-position potion-bar-bg-image"></div>
                <Potion
                    value="5"
                    id="health_potion_value"
                    className="potion health-potion-value"

                    imageid="health_potion"
                    imageClassName="health-potion-animation health-potion-image"></Potion>
                <Potion
                    value="70"
                    id="energy_potion_value"
                    className="potion energy-potion-value"
                    imageid="energy_potion"
                    imageClassName="energy-potion-animation energy-potion-image"></Potion>
            </div>
        )
    }
}

export default Potions;
