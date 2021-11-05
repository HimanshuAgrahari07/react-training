import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            this.clockComponent()
        )
    }

    componentDidMount() {
        // runs after the component output has been rendered to the DOM
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        // Called immediately before a component is destroyed
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    clockComponent() {
        return <div>
            <h1>Hello!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>;
    }
}

export default Clock