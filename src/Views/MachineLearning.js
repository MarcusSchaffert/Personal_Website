import React, { useState, useEffect } from 'react';
import Iris_flower_prediction from '../Hooks/Iris_flower_prediction'

function MachineLearning() {
    
    const [r_values, setRValues] = useState({
        no_response: true,
        flower_predicted: ''
    });
    const [value, setValue] = useState([3]);
    var no_response = true
    var flower_predicted = ''
    
   var prediction = {}

    function handleSubmit(e) {
        //prediction = Iris_flower_prediction(e)
        console.log(prediction)
        console.log('hello')


        
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
                flower_predicted: 'error'
            })
        });;

        console.log(r_values['flower_predicted'])

    }



  return (
    <div>
        <p>Machine Learning</p>
        <form action="" onSubmit={handleSubmit}>
            <label for='sepal_length'>sepal length</label><br/>
            <input type='text' id='sepal_length'/>
            <label for='sepal_width'>sepal width</label><br/>
            <input type='text' id='sepal_width'/>
            <label for='petal_length'>pedal length</label><br/>
            <input type='text' id='petal_length' />
            <label for='petal_width'>pedal width</label><br/>
            <input type='text' id='petal_width' />
            <input type='submit'/>
        </form>
        <h1 hidden={r_values['no_response']}>{r_values['flower_predicted']}</h1>

        
    </div>
  );
}

export default MachineLearning;