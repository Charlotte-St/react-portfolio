import { useState } from 'react';

export default function ContactForm(){
    const [name, setName] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameInputCheck = (e) => {
        const {input, value } = e.target;
    }

    return (
        <div className='container'>
            <form className='form'>
                <input 
                    value = {name}
                    name = 'nameVal'
                    type = 'text'
                    placeholder='Name'
                    className='form-control'
                    size='30'
                />
                <input 
                    value = {emailAddress}
                    name = 'emailVal'
                    type = 'email'
                    placeholder = 'Email Address'
                    className='form-control'
                />
                <textarea
                    value = {message}
                    name = 'messageVal'
                    type = 'textarea'
                    placeholder = 'Message'
                    className='form-control'
                    rows='5'
                />
                <button type ='submit' className='btn btn-primary'>
                    Send Message
                </button>
            </form>
        </div>
    )
}