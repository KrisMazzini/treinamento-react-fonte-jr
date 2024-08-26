import { styled } from "@/styles";

export const Container = styled("button", {
    border: "none",

    height: "$14",
    padding: "$4",
    borderRadius: "$xs",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: "$zinc-950",
    fontSize: "$lg",
    fontWeight: "$bold",

    backgroundImage: "$primary-gradient",
    cursor: "pointer",

    '&:not(:disabled):active': {
        filter: "brightness(1.2)"
    },

    '&:disabled': {
        background: "$zinc-400",
        cursor: "not-allowed",
    }
})