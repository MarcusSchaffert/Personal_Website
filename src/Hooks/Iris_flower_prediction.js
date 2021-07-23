import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Iris_flower_prediction(e){
    console.log('machine learning hook,')
    console.log(e)
    const [r_values, setRValues] = useState({
        no_response: true,
        flower_predicted: ''
    });
    const [value, setValue] = useState([3]);
    var no_response = true
    var flower_predicted = ''



    for(let i = 0; i <= 3; i++){
        value[i] = e.target[i].value
    }

    
    e.preventDefault();
   //const data = { name: value };
    const data = { name: value };
    console.log(data);

    
    fetch('/ml', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
            setRValues({
            no_response: false, 
            flower_predicted: res
        })
    }).catch(() => {
        setRValues({
            no_response: true,
            flower_predicted: ''
        })
    });

    console.log(r_values['flower_predicted'])


    //return r_values
}

export default Iris_flower_prediction