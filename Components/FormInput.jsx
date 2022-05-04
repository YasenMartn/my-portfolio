import React, {useState} from 'react'

const FormInput = (props) => {

    // state
    const [focused, setFocused] = useState(false);

    //destructuring props, removing hte props that we won't use inside input
    const {label, errorMessage, onChange, id, ...inputProps} = props;

    //changing state of input from false to true
    const handleFocus = (e) => {
        setFocused(true);
    };

  return (
    <div className='formInput'>
        <label>{label}</label>
        <input 
            // input props = name, placeHolder..etc
            {...inputProps} 
            //onchange
            onChange={onChange} 
            //onblur = click and leave
            onBlur={handleFocus} 
            //condition if it's focused make true a string "true" 
            focused={focused.toString()} 
            //onFocus = when we click the input with the name confirmPassword we'll set the state to true
            onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)} 
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput