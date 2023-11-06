import { Comentar, ComentarIcone, ContainerPost, DivLikes, DivTexto, InfoPost, Like, QntVotos, TextoPost } from "./styled";
import voto from '../../asssets/like.svg'
import coment from '../../asssets/comentario.svg'

function Post() {
    

    return(
        <>
        <ContainerPost>
            <DivLikes>
                <Like src={voto}/>
                <QntVotos>
                    0 votos
                </QntVotos>
            </DivLikes>
            <DivTexto>
                <InfoPost>Postado em 03/10/2023 por user123</InfoPost>
                <TextoPost> 
                    lsalfkjsanf fbasjdbfaoiw fiuargb  euae
                </TextoPost>
                <Comentar>
                    <ComentarIcone src={coment}/>
                    Comentar
                </Comentar>
            </DivTexto>
        </ContainerPost>
        </>
    )
}

export default Post;