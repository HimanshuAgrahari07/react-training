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

    componentDidUpdate() {
        // Invoked immediately after updating occurs. This method is not called for the initial render.
    }

    componentWillUnmount() {
        /**
         * Called immediately before a component is destroyed
         * We should not call setState(), because the component will never be re-rendered.
         * Once a component instance is unmounted, it will never be mounted again.
         */
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