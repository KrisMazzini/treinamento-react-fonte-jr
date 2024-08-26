import { ButtonHTMLAttributes } from "react";
import { CircleNotch } from "phosphor-react";

import { Container } from "./styles";

type ButtonProps = {
    label: string
    isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ label, isLoading, disabled, ...rest }: ButtonProps) {
    return (
        <Container disabled={disabled || isLoading} {...rest}>
            {
                isLoading ? 
                <CircleNotch size={24} /> :
                label
            }
        </Container>
    )
}