// This will have forms => use hooks
import React, { useState } from 'react';

// contactForm is the functional component
// 'callback' => the function that gets called when the user submits the form
const contactForm = (callback) => {
    //set the input fields, useState is a hook that initializes a state & setter function
    const [field, setField] = useState({});

    // function handles the submit event and prevents default of browser, and calls the 'callback' function
    const handleSubmit = (event) => {
        if(event){
            event.preventDefault();
        }
        callback();
    }

    // handles when the user is inputting into the fields
    const handleFieldChange = (event) => {
        event.persist();
        setField(field => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
        handleSubmit,
        handleFieldChange,
        field
    };
}

export default contactForm;