import React from 'react';

const inputValidator = (props) => {

    const validationOutput = () => {
       if(props.inputValue.length < props.inputMin){
        return <p>Input text is too short</p>
       }
       else{
        return <p>Input text is long enough</p>
       }
    }

    return validationOutput();
}

export default inputValidator;