import { globalCss } from ".";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },

    body: {
        background: "$zinc-950",
    },

    "body, input, button": {
        fontFamily: "$body",
        fontSize: "$lg",
        fontWeight: "$regular",
        color: "$white"
    },

    a: {
        color: "$sky-400",
        textDecoration: "none",

        '&:hover': {
            textDecoration: "underline"
        }
    }
})