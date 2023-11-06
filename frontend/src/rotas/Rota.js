import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/login/Login";
import Cadastro from "../paginas/cadastro/Cadastro";
import Home from "../paginas/home/Home";
import Configuracoes from "../paginas/configuracoes/configuracoes";
import Perfil from "../paginas/perfil/Perfil";
import Criar from "../paginas/criarPost/Criar";

function Rota() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<Login/>}/>
                <Route path='cadastro' element={<Cadastro/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='configuracoes' element={<Configuracoes/>}/>
                <Route path='perfil' element={<Perfil/>}/>
                <Route path='criar-post' element={<Criar/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rota;