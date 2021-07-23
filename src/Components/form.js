import React, { useState } from 'react'
import './Styles/form.css'
import FormSubmitData from '../Hooks/form_data_submit.js'

function Form(props) {
    const [reloadPage, setReloadPage] = useState(false)
    const [error, setError] = useState(false)

    function handleSubmits(e){
      e.preventDefault();
      // length -1 because last value is 'send' from
      // the button 
      var values = []
      for(let i = 0; i < e.target.length -1; i++){
        values[i] = e.target[i].value
        console.log(e.target[i].value)
      }

      //const data = { name: value };
      const data = { formValues: values};
      console.log(data);
      fetch(props.backEndFunction, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(() => {
              setError(false)
              window.location.reload(false);
      }).catch(() => {
          setError(true)
      });;
    }
    
  return (
    <div>
        <h1>{props.title}</h1>
        <form  action="" className='form-style' onSubmit={handleSubmits}>
            <label for='name'>Name</label>
            <input id='name' type='text' required/>
            <label for='email'>Email</label>
            <input type='text' id='email'  required/>
            <input id='send-button' type='submit' value='send'/>
        </form>
        <h3 style={{visibility: error ? 'visible': 'hidden'}}>Error in form submission</h3>
    </div>
  );
}



export default Form;