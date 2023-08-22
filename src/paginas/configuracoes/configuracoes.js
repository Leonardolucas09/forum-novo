import Atualizar from "../../components/atualizar/atualizarEmail";
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
                    <Atualizar/>
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
                
                </AccordionPanel>
                </AccordionItem>
            
            
            </Accordion>
        </Fundo>

        </DivNav>
        </>
    )
}

export default Configuracoes; 