import { styled } from "@/styles";

export const MovieBackground = styled('div', {
    background: "url(https://picsum.photos/1512/608)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
})

export const MovieContainer = styled("main", {
    padding: "$16",

    backdropFilter: "brightness(20%)",

    display: "flex",
    gap: "$8",
})

export const Poster = styled("img", {
    width: "$80",
    height: "$120",

    borderRadius: "$sm",
})

export const Details = styled("div", {
    width: "$160",

    display: "flex",
    flexDirection: "column",
    gap: "$8",
})

export const Header = styled("header", {
    display: "flex",
    flexDirection: "column",
    gap: "$2",

    h1: {
        fontSize: "$5xl",
        fontWeight: "$bold",
    },

    ul: {
        display: "flex",
        alignItems: "center",
        gap: "$2",

        listStyleType: "none",
    }
})

export const Genre = styled("li", {
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    padding: "$1 $2",

    border: "1px solid $sky-400",
    borderRadius: "$xs",

    backgroundImage: "$primary-gradient",
    backgroundClip: "text",

    fontWeight: "bold",
    color: "transparent",
})

export const DataDivider = styled("div", {
    width: "4px",
    height: "4px",
    borderRadius: "$full",

    background: "$zinc-400",
})

export const UsersRatings = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "$2",

    "> span": {
        fontWeight: "$bold"
    }
})

export const Overview = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "$2",

    h2: {
        fontSize: "$2xl",
        fontWeight: "$bold",
    },

    p: {
        fontSize: "$lg" ,
        color: "$zinc-400",
    }
})

export const RelatedContent = styled("div", {
    padding: "$16",
    paddingRight: 0,
})