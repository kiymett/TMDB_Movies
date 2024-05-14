import movie from "../assets/movie.jpg"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"

const Header = () => {
    return (
        <Container>
            <Image src={movie} className="img-head" thumbnail></Image>
            <h1 className="my-2 font-monospace">TMDB Movies</h1>
        </Container>
    )
}

export default Header;