import { Container, Title, Content } from "./styles";

import { MovieCard } from "../movie-card";

type MovieListProps = {
    title: string
}

export function MovieList({ title }: MovieListProps) {
    return (
        <Container>
            <Title>
                {title}
            </Title>

            <Content>
                {
                    Array.from({ length: 40 }).map((_, i) => {
                        return <MovieCard key={i} />
                    })
                }
            </Content>
        </Container>
    )
}