import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/login/Login";
import Home from "../paginas/home/Home";
import Cadastro from "../paginas/cadastro/Cadastro";
import Configuracoes from "../paginas/configuracoes/configuracoes";
import Perfil from "../paginas/perfil/Perfil";

function Rotas() {
    

    return(
        <BrowserRouter>
            <Routes>
               <Route index element={<Login/>}/>
               <Route path='home' element={<Home/>}/>
               <Route path='cadastro' element={<Cadastro/>}/>
               <Route path='configuracoes' element={<Configuracoes/>}/>
               <Route path='perfil' element={<Perfil/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;