import React, { useState } from 'react';

// 'callback' => the function that gets called when the user submits the form
const ContactForm = (callback) => {
    //set the input fields, useState is a hook that initializes a state & setter function
    const [field, setField] = useState({});
    const [field, setField] = useState({ userName: '', email: '', message: ''});

    // function handles the submit event and prevents default of browser, and calls the 'callback' function

    // handles when the user is inputting into the fields
    const handleFieldChange = (event) => {
        event.persist();
        setField(field => ({...field, [event.target.userName]: event.target.value}));
    }
 
    return (
        <section className='container'>
            <h2 className='form-title'>Contact Form</h2>
        <form className='justify-content-center' id='contact-form'>
            <div>
                <label htmlFor='userName'>Name:</label>
                <input className='form-control' type='text' name='name' defaultValue={userName} onBlur={handleFieldChange}></input>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input className='form-control' type='text' name='email' defaultValue={email} onBlur={handleFieldChange}></input>
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea className='form-control' type='text' name='message' defaultValue={message} onBlur={handleFieldChange}></textarea>
            </div>

            <div>
                <button className='btn btn-outline-dark' type='submit' onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
        </section>
    )
};

    
export default ContactForm;
