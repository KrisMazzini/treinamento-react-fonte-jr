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
                    <Input />
                    <Input />
                    {/* <label>
                        Senha

                        <div>
                            <input type='password' placeholder='Digite sua senha' />
                            <LockKey />
                        </div>
                    </label> */}

                    <Button type="submit" />
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