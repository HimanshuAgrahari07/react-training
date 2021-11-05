import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }

    render() {
        return this.welcomeComponent();
    }

    welcomeComponent() {
        return <h1>Hello, {this.name}</h1>;
    }
}

export default Welcome