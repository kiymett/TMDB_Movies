import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";

const CardContainer = () => {
    const [movies, setMovies] = useState([])
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    // console.log(API_KEY)
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

    // Wenn search mache,  sollte die Daten von der URL, die ich hier als Parametre eingebe, sollte gemäß diese URL die Daten abgerufen werden.

    const getMovies = async (url) => {
        try {
            const res = await axios(url)
            setMovies(res.data.results)
            console.log(res.data.results)
        } catch (err) {
            console.log(err)
        }
    }

    // Wenn die Seite erst augeladen wird, nimm die Daten von API

    useEffect(() => {
        getMovies(FEATURED_API)
    }, [])

    const [search, setSearch] = useState("")
    //console.log(search)

    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    //console.log(SEARCH_API)

    const handleSubmit = (e) => {
        console.log('submite girdi')
        // console.log(search)
        e.preventDefault()
        // console.log(SEARCH_API)
        getMovies(SEARCH_API)
    };

    // const handleChange = (e) => {
    //     setSearch(e.target.value);
    //     getMovies(SEARCH_API);
    // }

    return (
        <>
            <InputGroup
                className="mb-3 m-auto"
                type="search"
                onChange={(e) => setSearch(e.target.value)}>
                <Form.Control
                    placeholder="Search a movie"
                    onSubmit={handleSubmit}
                />
                <Button variant="danger" type="submit" onClick={handleSubmit}>
                    Search
                </Button>
            </InputGroup>

            <Container className="rounded my-4 p-3 card-container">
                <Row className="justify-content-center g-3">
                    {movies.map((movie, i) =>
                        <Col xl={3} lg={4} m={6} key={i} >
                            <MovieCard {...movie} />
                        </Col>)}
                </Row>
            </Container >
        </>
    )
    // }
}




export default CardContainer