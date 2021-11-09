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
        console.log('state before handleLoginClick: ', this.state.isLoggedIn);
        this.setState({ isLoggedIn: true });
        console.log('state after handleLoginClick: ', this.state.isLoggedIn);
    }

    handleLogoutClick() {
        console.log('LogOut clicked');
        console.log('state before handleLogoutClick: ', this.state.isLoggedIn);
        this.setState({ isLoggedIn: false });
        console.log('state after handleLogoutClick: ', this.state.isLoggedIn);
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        console.log('state before rendering: ', isLoggedIn);

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