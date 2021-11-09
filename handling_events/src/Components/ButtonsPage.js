import React, { Component } from 'react';
import Button from './Button'

class ButtonsPage extends Component {
    constructor(props) {
        super(props);
    }

    getButtons = () => {
        const buttonTexts = [
            'red',
            'green',
            'orange'
        ];

        return buttonTexts.map((button, index) => {
            return <Button key={index+1} value={button}/>
        })
    }

    render() {
        return (
            <div>
                {this.getButtons()}
            </div>
        )
    }
}

export default ButtonsPage;