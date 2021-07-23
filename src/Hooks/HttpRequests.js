import React, {useEffect, useState} from 'react'
import axios from 'axios'


function useAxiosGet(url){
    const [request, set_request] = useState({
        loading: false, 
        data: null,
        error: false
    })

    useEffect(() => {
        set_request({
            loading: true, 
            data: null,
            error: false
        })
        axios.get(url).then(response => {
            set_request({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            set_request({
                loading: false, 
                data: null,
                error: true
            })
        })
    }, [url])

    return request
}

export default useAxiosGet