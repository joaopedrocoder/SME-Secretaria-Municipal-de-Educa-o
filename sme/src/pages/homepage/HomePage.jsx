import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import SelectComponent from "../../components/select/SelectComponent"
import Table from "../../components/table/Table"
import { ContentMain } from "./style"

const HomePage = () => {
    return (
        <div>
            <Header/>

            <ContentMain>
                <SelectComponent/>
                <Table/>
            </ContentMain>
            
            <Footer/>
        </div>
    )
}

export default HomePage
