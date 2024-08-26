import { styled } from "@/styles"

export const Container = styled("label", {
    display: "flex",
    flexDirection: "column",
    gap: "$2",

    fontWeight: "$bold"
})

export const InputContainer = styled("div", {
    "$$color": "$colors$zinc-800",

    height: "$14",
    padding: "$4",
    borderRadius: "$xs",

    display: "flex",
    justifyContent: "space-between",
    gap: "$4",
    alignItems: "center",

    background: "$zinc-800",
    border: '2px solid $$color',

    input: {
        outline: "none",
        border: "none",

        width: "$full",
        background: "transparent",
        fontWeight: "$regular",

        '&::placeholder': {
            color: "$zinc-400"
        }
    },

    "&:focus-within": {
        "$$color": "$colors$sky-400"
    }
})