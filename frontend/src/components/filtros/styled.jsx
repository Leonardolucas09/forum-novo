import styled from 'styled-components';

export const ContainerFiltrosPrincipal = styled.div`
    width: 100%;
    height: 10%;
    border: 3px solid #6913A5;
    display: flex;
    align-items: center;
`
export const ContainerFiltros = styled.button`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    color: #BFA1D2;
    font-size: 24px;
    justify-content: center;
    background-color: transparent;
    border: none;
    &:hover{
        background-color: #6913A5;
    }
`


export const Icones = styled.img`
    object-fit: cover;
    margin-right: 5px;
    height: 45px;
`
