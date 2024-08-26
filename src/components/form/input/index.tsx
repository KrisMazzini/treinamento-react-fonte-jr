import { User } from 'phosphor-react'

import { Container, InputContainer } from './styles'

export function Input() {
    return (
        <Container>
            Nome de usuário

            <InputContainer>
                <input placeholder='Digite seu nome de usuário' />
                <User size={24} />
            </InputContainer>
        </Container>
    )
}