import styled from 'styled-components'

export const Fundo = styled.div`
    display: flex; 
    flex-direction: column; 
    padding: 20px;
    align-content: left;
    width: 18vw;
    min-height: 100vh;
    background: #0F001A;
    border: 3px solid #6913A5;
    gap: 20px;
`


export const Caminhos = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    flex-direction: row;
    align-items: center; 
    color: #BFA1D2;
    font-family: Baskervville;
    font-size: 24px;
    gap: 5px;
    &:hover{
        text-decoration: underline;
    }
`   
export const Menu = styled.div`
    display: flex;
    margin-top: 130px;
    flex-direction: column;
    align-items: left; 
    gap: 12px;

`

export const Logo = styled.img`
    width: 70px;
    height: 70px;
`

export const Icone = styled.img`
    width: 35px;
    height: 35px;
`

export const ImgLogo = styled.img`
    height: 60%;
`