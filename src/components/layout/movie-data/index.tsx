import { IconProps } from "phosphor-react";
import { ComponentProps } from "react";

import { Container } from "./styles";

type MovieDataProps = {
    value: string
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
} & ComponentProps<typeof Container>

export function MovieData({ value, size, icon: Icon }: MovieDataProps) {
    return (
        <Container size={size}>
            <Icon size={size === "md" ? 20 : 16} />

            <span>{value}</span>
        </Container>
    )
}