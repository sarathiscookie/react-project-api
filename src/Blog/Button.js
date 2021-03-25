import React from 'react';

class Button extends React.Component
{
    buttonClickHandler = () => {
        console.log('Hurray ! Clicked.');
    } 

    render() {
        return (
            <div>
                <button onClick = {this.buttonClickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default Button;