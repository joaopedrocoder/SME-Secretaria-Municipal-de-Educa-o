import axios from "axios"
import { useState, useEffect } from "react"


const useRequestData = () => {
    const [data, setData] = useState(initialData, url)

    useEffect(()=>{
        getRequest()
    },[])

    const getRequest = () =>{
        axios.get(url)
        .then((res)=>{
            setData(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (data)
}

export default useRequestData
