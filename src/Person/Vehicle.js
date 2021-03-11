import React from 'react';

class Vehicle extends React.Component {
    render() {
        return (
            <div>
                <h5>Vehicle Name: { this.props.name }</h5>
                <h6>Vehicle Model: { this.props.model }</h6>
            </div>
        )
    }
}

export default Vehicle;