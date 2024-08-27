import { Link } from 'react-router-dom'
import { At, LockKey, User } from 'phosphor-react'

import { Form, Header } from './styles'

import { Input } from '@/components/form/input'
import { Button } from '@/components/form/button'

export function SignUp() {
    return (
        <>
            <Header>
                <h1>Criar conta grátis</h1>
                <span>Descubra novos filmes e compartilhe experiências com a comunidade</span>
            </Header>

            <Form>
                <Input
                    label='Nome de usuário'
                    placeholder='Digite seu nome de usuário'
                    icon={User}
                />

                <Input
                    label='E-mail'
                    placeholder='Digite seu e-mail'
                    icon={At}
                />

                <Input
                    label='Senha'
                    placeholder='Digite sua senha'
                    type="password"
                    icon={LockKey}
                />

                <Input
                    label='Confirmar Senha'
                    placeholder='Digite sua senha novamente'
                    type="password"
                    icon={LockKey}
                />

                <Button label="Finalizar cadastro" type="submit" />
            </Form>

            <footer>
                <span>
                    Já possui uma conta?{' '}
                    <Link to="/sign-in">Entre agora</Link>
                </span>
            </footer>
        </>
    )
}