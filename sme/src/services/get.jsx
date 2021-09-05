import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const getDiretorias = (setData) =>{
    axios.get(`${BASE_URL}/diretorias/`)
    .then((res)=>{
        setData(res.data.results)
    })
    .catch((error)=>{
        console.error(error)
    })
}

export const getTipoEscola = (setData) =>{
    axios.get(`${BASE_URL}/smeescolas/`)
    .then((res)=>{
        setData(res)
    })
    .catch((error)=>{
        console.error(error)
    })
}

export const getTipoEscolaPelaDiretoria = (setData, diretoria) =>{
    axios.get(`${BASE_URL}/smeescolas/${diretoria}`)
    .then((res)=>{
        setData(res)
    })
    .catch((error)=>{
        console.error(error)
    })
}