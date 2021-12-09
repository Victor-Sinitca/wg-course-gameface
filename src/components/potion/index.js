import React from 'react';
import { h, render, Component } from 'react';

class Potion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || 50,
        };
    }

    onUse() {
        if(!this.state.value) return;

        this.setState({
            value: this.state.value-1
        })
    }

    render() {
        return (
            <div className="pointer-cursor">
                <div id={this.props.imageid} className={this.props.imageClassName} onClick={() => {this.onUse();}}></div>
                <div id={this.props.id} className={this.props.className}>{ this.state.value }</div>
            </div>
        )
    }
}

export default Potion;
