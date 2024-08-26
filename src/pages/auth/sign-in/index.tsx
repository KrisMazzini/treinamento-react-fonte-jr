import { LockKey, User } from 'phosphor-react'

import { Container, Content, Form, Header, Image } from './styles'

import { Input } from '@/components/form/input'
import { Button } from '@/components/form/button'

export function SignIn() {
    return (
        <Container>
            <Image />

            <Content>
                <Header>
                    <h1>Acessar conta</h1>
                    <span>Descubra novos filmes e compartilhe experiências com a comunidade</span>
                </Header>

                <Form>
                    <Input
                        label='Nome de usuário'
                        placeholder='Digite seu nome de usuário'
                        icon={User}
                    />

                    <Input
                        label='Senha'
                        placeholder='Digite sua senha'
                        type="password"
                        icon={LockKey}
                    />

                    <Button label="Entrar" type="submit" />
                </Form>

                <footer>
                    <span>
                        Não possui uma conta?{' '}
                        <a href='/'>Registre-se gratuitamente</a>
                    </span>
                </footer>
            </Content>
        </Container>
    )
}