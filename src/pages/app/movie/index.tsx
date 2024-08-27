import { MovieData } from "@/components/layout/movie-data"
import { MovieRating } from "@/components/layout/movie-rating"
import { Calendar, Clock } from "phosphor-react"
import { useParams } from "react-router-dom"

import { MovieBackground, MovieContainer, Poster, Details, Header, DataDivider, UsersRatings, Overview, Genre, RelatedContent } from "./styles"
import { MovieList } from "@/components/layout/movie-list"

type MovieRouteParams = {
    movieId: string
}

export function Movie() {
    const { movieId } = useParams<MovieRouteParams>()

    console.log(movieId)

    return (
        <>
            <MovieBackground>
                <MovieContainer>
                    <Poster src="https://picsum.photos/320/480" />

                    <Details>
                        <Header>
                            <h1>Movie Name</h1>

                            <ul>
                                <Genre>Action</Genre>
                                <Genre>Scifi</Genre>
                                <Genre>Zombie</Genre>
                            </ul>

                            <ul>
                                <MovieData icon={Calendar} value="27/08/2024" size="md" />
                                <DataDivider />
                                <MovieData icon={Clock} value="1h30min" size="md" />
                            </ul>
                        </Header>

                        <UsersRatings>
                            <MovieRating progress={70} size="md" />

                            <span>
                                Avaliação
                                <br/>
                                dos usuários
                            </span>
                        </UsersRatings>

                        <Overview>
                            <h2>Sinopse</h2>

                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum dicta tempore vero omnis. Magnam molestiae provident eligendi explicabo minus obcaecati, quaerat facilis ipsum labore itaque, veritatis cupiditate, nihil animi?
                            </p>
                        </Overview>
                    </Details>
                </MovieContainer>
            </MovieBackground>

            <RelatedContent>
                <MovieList title="Você também pode se interessar por" />
            </RelatedContent>
        </>
    )
}