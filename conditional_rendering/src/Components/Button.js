import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = props.onClick
        this.text = props.text;
    }

    render() {
        return (
            <button onClick={this.onClick}>
                {this.text}
            </button>
        )
    }
}

export default Button;