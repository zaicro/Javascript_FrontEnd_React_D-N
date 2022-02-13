import React, { Component } from "react";

class ClockUsingClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.time = setInterval(() => {

        }, 1000)
    }

    changeTime() {
        this.setState({ date: new Date() })
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <div>Hola Muundo desde un componente</div>
            </>
        )
    }
}
export default ClockUsingClass;