import React from 'react'
import Card from "react-bootstrap/Card"
import { useState } from 'react';
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const PlayerCard = ({ title, poster_path, overview, vote_average, id }) => {
    const [showImage, setShowImage] = useState(true);
    const handleClick = () => setShowImage(!showImage);
    const getVoteClass = (vote) => {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 6) {
            return "orange";
        } else {
            return "red";
        }
    };
    return (
        <Card className='rounded-2 m-auto player-card' role="button" onClick={handleClick}>
            {showImage ? (
                <Card.Body>
                    <Card.Title className='h6'>{title}</Card.Title>
                    <Card.Img src={IMG_API + poster_path}></Card.Img>
                </Card.Body>
            ) : (
                <Card.Body>
                    <Card.Text className='container-fluid text-left card-overview'>{overview}</Card.Text>
                    <Card.Subtitle className={`container-fluid text-center tag ${getVoteClass(vote_average)}`} >{vote_average.toFixed(1)}</Card.Subtitle>
                </Card.Body>)
            }

        </Card >
    )
}

export default PlayerCard