import React from 'react'
import { assert } from 'workbox-core/_private'

// create a array that contains an object per entry
// this function is used to handle data recieved from the backend
// which will usually return one object that contains arrays of data.
// We want to loop through those arrays and create objects that have
// data from each array entry.
// this returned array can then be iterated over by other classes
function create_array_from_backend_object_data(object_from_backend) {
    var data_array = []
    var blog_data = object_from_backend.blog_data
    var blog_data_keys = Object.keys(object_from_backend.blog_data)
    

    for(let i = 0; i < blog_data[blog_data_keys[0]].length; i++)
    {
        var data_object = {}
        for(let j = 0; j < blog_data_keys.length; j++){
            data_object[blog_data_keys[j]] = blog_data[blog_data_keys[j]][i]
        }
        data_array.push(data_object)
    }
  return data_array
}


export default create_array_from_backend_object_data