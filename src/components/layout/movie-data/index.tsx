import { IconProps } from "phosphor-react";

import { Container } from "./styles";

type MovieDataProps = {
    value: string
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

export function MovieData({ value, icon: Icon }: MovieDataProps) {
    return (
        <Container>
            <Icon size={16} />

            <span>{value}</span>
        </Container>
    )
}