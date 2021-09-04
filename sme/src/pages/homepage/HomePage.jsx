import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Table from "../../components/table/Table"
import { ContentMain } from "./style"

const HomePage = () => {
    return (
        <div>
            <Header/>

            <ContentMain>
                <Table/>
            </ContentMain>
            
            <Footer/>
        </div>
    )
}

export default HomePage
