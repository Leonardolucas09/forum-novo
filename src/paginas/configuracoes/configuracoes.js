import { Icone } from "../../components/sideBar/style";
import { DivNav, Fundo, Outros } from "./style";
import config from '../../asssets/configuracoes.svg'
import Nav from '../../components/sideBar/side'
import Pesquisar from '../../components/searchBar/search'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel
  } from '@chakra-ui/react'
import AtualizarSenha from "../../components/atualizar/atualizarSenha";
import AtualizarEmail from "../../components/atualizar/atualizarEmail";
import AtualizarNome from "../../components/atualizar/atualizarNome";
import AtualizarBio from "../../components/atualizar/atualizarBio";
import AtualizarFoto from "../../components/atualizar/atualizarFoto";

function Configuracoes() {
    return(
        <>
        <DivNav>
        <Nav/>
        <Fundo>
        <Pesquisar/>
            <Accordion>
                <AccordionItem >
                <AccordionButton bg='#0F001A' border='none'>
                    <Outros>
                        <Icone src={config}/>
                        Mudar o nome do usuário
                    </Outros>
                </AccordionButton>
                <AccordionPanel>
                    <AtualizarNome/> 
                </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                <AccordionButton bg='#0F001A' border='none'>
                    <Outros>
                    <Icone src={config}/>
                    Mudar email
                    </Outros>
                </AccordionButton>
                <AccordionPanel>
                    <AtualizarEmail/>
                </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                <AccordionButton bg='#0F001A' border='none'>
                    <Outros>
                    <Icone src={config}/>
                    Mudar senha
                    </Outros>
                </AccordionButton>
                <AccordionPanel>
                    <AtualizarSenha/>
                </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                <AccordionButton bg='#0F001A' border='none'>
                    <Outros>
                    <Icone src={config}/>
                    Mudar foto de perfil
                    </Outros>
                </AccordionButton>
                <AccordionPanel>
                    <AtualizarFoto/>
                </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                <AccordionButton bg='#0F001A' border='none'>
                    <Outros>
                    <Icone src={config}/>
                    Mudar biografia
                    </Outros>
                </AccordionButton>
                <AccordionPanel>
                    <AtualizarBio/>
                </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Fundo>

        </DivNav>
        </>
    )
}

export default Configuracoes; 