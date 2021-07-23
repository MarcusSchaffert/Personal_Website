import React from 'react'
import Form from '../Components/form.js'
import '../Components/Styles/form.css'

function Contact() {

  return (
    <div>
        Shalom, this is the Contact page
        <Form title='Sign up for more content' backEndFunction='/blog_sign_up'/>
    </div>
  );
}

export default Contact;