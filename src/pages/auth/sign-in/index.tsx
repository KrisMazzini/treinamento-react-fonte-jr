import { LockKey, User } from 'phosphor-react'

import { Form, Header } from './styles'

import { Input } from '@/components/form/input'
import { Button } from '@/components/form/button'
import { Link } from 'react-router-dom'

export function SignIn() {
    return (
        <>
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
                    <Link to="/sign-up">Registre-se gratuitamente</Link>
                </span>
            </footer>
        </>
    )
}