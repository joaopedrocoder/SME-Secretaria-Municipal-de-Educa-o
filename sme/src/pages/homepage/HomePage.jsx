import { useEffect, useState } from "react"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import SelectComponent from "../../components/select/SelectComponent"
import TableComponent from "../../components/table/TableComponent"
import { getDiretorias } from "../../services/get"
import { ContentMain } from "./style"

const HomePage = () => {
    const [diretorias, setDiretorias] = useState([])
    const [valueSelect, setValueSelect] = useState('')

    const handleChange = (event) => {
        setValueSelect(event.target.value);
    };

    useEffect(()=>{
        getDiretorias(setDiretorias)
    },[])

    console.log(diretorias)

    return (
        <div>
            <Header/>

            <ContentMain>
                <SelectComponent
                    valueSelect={valueSelect}
                    onChange={handleChange}
                    options={diretorias}
                />
                <TableComponent/>
            </ContentMain>
            
            <Footer/>
        </div>
    )
}

export default HomePage
