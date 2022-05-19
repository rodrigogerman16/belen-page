import React, {Fragment, useState}  from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

    const [datos, setDatos] = useState ({
        name: '',
        phone: '',
        email: '',
        message: '',
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
        [e.target.name] : e.target.value
        })        
    }

    const sendData = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_05y8hs1', 'template_96u0nmf', e.target, '3JrmPJmxGZpTsDh1a').then (res=>{
            alert('Your message has been sent.');
    })
    }

    return (
        <Fragment>
            <div className='Contact-container' id='Contact' onSubmit={sendData}>
            <div className='Message-form'>
            <h1>Do you need dance lessons, a face to your brand or workshop in your country?</h1>
            <h2>¡Contact me!</h2>
            <div className='Border'></div>  
            <form className='Contact-form' action="index.html" method="post">
                <input type="text" className='Contact-form-text' placeholder='Name' name='name' onChange={handleInputChange}/>
                <input type="text" className='Contact-form-text' placeholder='Phone' name='phone'onChange={handleInputChange}/>
                <input type="email" className='Contact-form-text' placeholder='Email' name='email'onChange={handleInputChange}/>
                <textarea type="text" className='Contact-form-text' placeholder='Message' name='message'onChange={handleInputChange}/>
                <input type="submit" className='Contact-form-btn' value='Send'/>
            </form>
            </div>
            <div className='Sponsors'>
            LOGO LOGO LOGO
            </div>        
        </div>
      </Fragment>
    );
}

export default Form;