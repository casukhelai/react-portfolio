// This will have forms => use hooks
import React, { useState } from 'react';

// contactForm is the functional component
// 'callback' => the function that gets called when the user submits the form
const contactForm = (callback) => {
    //set the input fields, useState is a hook that initializes a state & setter function
    const [field, setField] = useState({ userName: '', email: '', message: ''});

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
        setField(field => ({...field, [event.target.userName]: event.target.value}));
    }
    return (
        <section class='container'>
            <h2 class='form-title'>Contact Form</h2>
        <form class='justify-content-center' id='contact-form'>
            <div>
                <label htmlFor='userName'>Name:</label>
                <input class='form-control' type='text' name='name' defaultValue={userName} onBlur={handleFieldChange}></input>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input class='form-control' type='text' name='email' defaultValue={email} onBlur={handleFieldChange}></input>
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea class='form-control' type='text' name='message' defaultValue={message} onBlur={handleFieldChange}></textarea>
            </div>

            <div>
                <button class='btn btn-outline-dark' type='submit' onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
        </section>
    )
};

export default contactForm;


