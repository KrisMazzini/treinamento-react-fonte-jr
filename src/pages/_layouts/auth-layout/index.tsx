import { Outlet } from 'react-router-dom'
import { Container, Content, Image } from './styles'

export function AuthLayout() {
    return (
        <Container>
            <Image />

            <Content>
                <Outlet />
            </Content>
        </Container>
    )
}