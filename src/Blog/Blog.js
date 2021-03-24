import React from 'react';

class Blog extends React.Component
{
    render() {
        return (
            <div>
                <h5>{ this.props.likes }</h5>
                <h5>{ this.props.comments }</h5>
                <p>{ this.props.children }</p>
            </div>
        );
    }
} 

export default Blog;