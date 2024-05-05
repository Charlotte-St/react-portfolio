import { useState } from 'react';

export default function ContactForm(){
    const [name, setName] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameInputCheck = (e) => {
        const {input, value } = e.target;

        return input === setName(value)
    }

    const emailInputCheck = (e) => {
        const {input, value } = e.target;
        return input === setEmail(value)
    }

    const messageCheck = (e) => {
        const {input, value} = e.target;
        return input === setMessage(value)
    }

    const handleOnChange = ( email ) => {
        const {input, value} = email.target;
        let regEx = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');

        if (regEx.test(input)){
            return setEmail(value)
        } else {
            alert('Please enter a valid email address.')
        }
    }

    return (
        <div className='container'>
            <form className='form'>
                <label>Name: </label>
                <input 
                    value = {name}
                    name = 'nameVal'
                    type = 'text'
                    placeholder='Name'
                    className='form-control'
                    size='30'
                    onChange={nameInputCheck}
                />
                <label>Email Address:</label>
                <input 
                    value = {emailAddress}
                    name = 'emailVal'
                    type = 'email'
                    placeholder = 'Email Address'
                    className='form-control'
                    onChange={handleOnChange}
                />
                <label>Message:</label>
                <textarea
                    value = {message}
                    name = 'messageVal'
                    type = 'textarea'
                    placeholder = 'Message'
                    className='form-control'
                    rows='5'
                    cols='30'
                    onChange={messageCheck}
                />
                <button type ='submit' className='btn btn-primary'>
                    Send Message
                </button>
            </form>
        </div>
    )
}