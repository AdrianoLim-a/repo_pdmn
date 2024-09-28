import Imagens from "./Imagens"

const ListaImagens = ({ pics, imgStyle }) => {
    return (

        pics.map((pic, key) => (
            <Imagens
            imgStyle={imgStyle}
                key={key}
                url={pic.src.small}
                alt={pic.alt}
            />
        ))
    )
}

export default ListaImagens