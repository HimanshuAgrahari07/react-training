import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }

        this.value = props.value
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(previousState => ({
            isToggleOn: !previousState.isToggleOn // inverting previous state   
        }));
    }

    getRandomNumber(maxSize) {
        const max = Math.floor(maxSize);
        return Math.floor(Math.random() * (max + 1));
    }

    getRandomClassName() {
        const classes = ['primary', 'secondary', 'success', 'danger', 'warning']
        const randNum = this.getRandomNumber(classes.length)
        return classes[randNum]
    }

    render() {
        const randomClassName = this.getRandomClassName()
        return (
            <button onClick={this.handleClick}
            className = {`btn btn-lg btn-block btn-${randomClassName}`}>
                {this.state.isToggleOn ? this.value : randomClassName}
            </button>
        )
    }
}

export default Button;