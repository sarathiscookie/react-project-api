import React from 'react';
import Comment from './Comments'
import Like from './Likes'

const user = (props) => {
    return (
        <div>
            <h5>Name: { props.name }</h5>
            <Comment comment = 'Test comment'/>
            <Like count = '1' />
        </div>
    )
}

export default user;