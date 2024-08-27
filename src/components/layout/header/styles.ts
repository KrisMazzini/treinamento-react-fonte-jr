import { NavLink as ReactRouterNavLink } from "react-router-dom";

import { styled } from "@/styles";

export const Container = styled("header", {
    padding: '$4',

    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    background: "$zinc-800",
})

export const NavLink = styled(ReactRouterNavLink, {
    display: "flex",
    alignItems: "center",
    gap: "$2",

    fontSize: "$lg",
    fontWeight: "$bold",

    color: "$white",

    '&.active': {
        color: "$sky-400"
    }
})