import React, { useState } from 'react'
import Form from '../Components/form.js'
import '../Components/Styles/form.css'

function FormDataSubmit(values, backEndFunction) {
    const[loading, setLoading] = useState(true)

    //const data = { name: value };
    const data = { formValues: values};
    console.log(data);
    fetch(backEndFunction, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
            setLoading(false)
    }).catch(() => {
        setLoading(true)
    });;

    if(loading){
        return false
    }
    else{
        return true
    }
}

export default FormDataSubmit;