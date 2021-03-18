import React from 'react';

class Like extends React.Component {
    render() {
        return (
            <div>
                <span>{ this.props.count }</span>
            </div>
        );
    }
}

export default Like;