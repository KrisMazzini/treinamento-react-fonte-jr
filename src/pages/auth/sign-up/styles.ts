import { styled } from "@/styles";

export const Header = styled("header", {
    maxWidth: "400px",
    textAlign: "center",

    h1: {
        fontSize: "$4xl",
        marginBottom: "$2",
        backgroundImage: "$primary-gradient",
        backgroundClip: "text",
        color: "transparent",
    },

    span: {
        fontSize: "$xl"
    }
})

export const Form = styled("form", {
    width: "$full",

    display: "flex",
    flexDirection: "column",
    gap: "$4",
})