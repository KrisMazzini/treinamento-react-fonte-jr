import { Container, Name, Photo } from "./styles";

export function Profile() {
    return (
        <Container>
            <Name>John Doe</Name>
            <Photo src="https://picsum.photos/200" />
        </Container>
    )
}