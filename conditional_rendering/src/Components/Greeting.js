import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.isLoggedIn = props.isLoggedIn
    }

    render() {
        if(this.isLoggedIn) {
            return <h1>Welcome back!</h1>
        }

        return <h1>Please sign up.</h1>
    }
}

export default Greeting;