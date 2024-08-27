import { Container } from "./styles";

import { MovieList } from "@/components/layout/movie-list";

export function Home() {
    return (
        <Container>
            <MovieList title="Melhores avaliações" />
            <MovieList title="Os mais populares" />
            <MovieList title="Lançamento em breve" />
        </Container>
    )
}