import { InputHTMLAttributes } from 'react'
import { IconProps } from 'phosphor-react'

import { Container, InputContainer } from './styles'

type InputProps = {
    label: string
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ label, icon: Icon, ...rest }: InputProps) {    
    return (
        <Container>
            {label}

            <InputContainer>
                <input {...rest} />
                <Icon size={24} />
            </InputContainer>
        </Container>
    )
}