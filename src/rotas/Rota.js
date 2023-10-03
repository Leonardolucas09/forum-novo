import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/login/Login";
import Cadastro from "../paginas/cadastro/Cadastro";

function Rota() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<Login/>}/>
                <Route path='cadastro' element={<Cadastro/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Rota;