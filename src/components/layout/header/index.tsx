import { House } from "phosphor-react";

import { Container, NavLink } from "./styles";
import { Profile } from "../profile";

export function Header() {
    return (
        <Container>
            <NavLink to="/">
                <House size={28} weight="bold" />
                Página inicial
            </NavLink>

            <Profile />
        </Container>
    )
}