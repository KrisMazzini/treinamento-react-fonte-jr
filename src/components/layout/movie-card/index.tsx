import { Calendar } from "phosphor-react";

import { Container, Content, Details, Name, Poster } from "./styles";

import { MovieData } from "../movie-data";
import { MovieRating } from "../movie-rating";

export function MovieCard() {
    return (
        <Container>
            <Poster src="https://picsum.photos/160/240" />

            <Content>
                <Details>
                    <Name>Movie Name</Name>
                    <MovieData icon={Calendar} value="27/08/2024" />
                </Details>

                <MovieRating progress={Math.round(Math.random() * 100)} />
            </Content>
        </Container>
    )
}