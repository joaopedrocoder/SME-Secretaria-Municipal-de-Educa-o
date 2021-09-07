import { useEffect, useState } from "react"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import SelectComponent from "../../components/select/SelectComponent"
import TableComponent from "../../components/table/TableComponent"
import { getDiretorias, getTipoEscolaPelaDiretoria } from "../../services/get"
import { ContentMain } from "./style"

const HomePage = () => {
    const [diretorias, setDiretorias] = useState([])
    const [valueSelect, setValueSelect] = useState('')
    const [tiposDeEscolas, setTiposDeEscolas] = useState([])

    const handleChange = (event) => {
        setValueSelect(event.target.value);
    };

    useEffect(()=>{
        getDiretorias(setDiretorias)
    },[])

    useEffect(()=>{
        getTipoEscolaPelaDiretoria(setTiposDeEscolas, valueSelect)
    },[valueSelect])

    console.log(tiposDeEscolas)

    function transformaArray (array){
        let novoArray = [], tiposEsc = {}, atual
        for(let i=0; i < array.length; i++){
            atual = array[i]
            if(!(atual.tipoesc in tiposEsc)){
                tiposEsc[atual.tipoesc] = {tipoesc: atual.tipoesc, faixas:[]}
                novoArray.push(tiposEsc[atual.tipoesc])
            }

            tiposEsc[atual.tipoesc].faixas.push({faixa: atual.faixa, count: atual.count})
        }

        return novoArray
    }

    const newTiposDeEscolas = transformaArray(tiposDeEscolas)

    return (
        <div>
            <Header/>

            <ContentMain>
                <SelectComponent
                    valueSelect={valueSelect}
                    onChange={handleChange}
                    options={diretorias}
                />
                {tiposDeEscolas.length >= 1 ?(
                    <TableComponent
                        dadosDaTabela={newTiposDeEscolas}
                    />
                ):(
                    <h1>Selecione uma diretoria</h1>
                )}
                
            </ContentMain>
            
            <Footer/>
        </div>
    )
}

export default HomePage
