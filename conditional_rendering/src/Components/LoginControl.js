import React, { Component } from 'react';
import Button from './Button'
import Greeting from './Greeting'

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        console.log('Login clicked');
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        console.log('LogOut clicked');
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <Button text="LogOut" onClick={this.handleLogoutClick} />;
        } else {
            button = <Button text="LogIn" onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;