import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.value = props.value
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        
    }

    getRandomNumber(maxSize) {
        const max = Math.floor(maxSize);
        return Math.floor(Math.random() * max);
    }

    getRandomClassName() {
        const classes = ['primary', 'secondary', 'success', 'danger', 'warning']
        const randNum = this.getRandomNumber(classes.length)
        console.log(randNum)
        console.log(classes[randNum])
        return classes[randNum]
    }

    render() {
        const randomClassName = this.getRandomClassName()
        return (
            <button onClick={this.handleClick}
            className = {`btn btn-lg btn-block btn-${randomClassName}`}>
                {randomClassName}
            </button>
        )
    }
}

export default Button;