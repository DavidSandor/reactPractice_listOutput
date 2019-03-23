import React from 'react';

const charComponent = (props) => {
    return <p className="char-component" onClick={props.click}>{props.inputChar}</p>
}

export default charComponent;