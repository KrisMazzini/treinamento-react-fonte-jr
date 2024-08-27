import { styled } from "@/styles";

export const Container = styled("section", {
    display: "flex",
    flexDirection: "column",
    gap: "$4"
})

export const Title = styled("h2", {
    fontSize: "$2xl",
    fontWeight: "$bold"
})

export const Content = styled("div", {
    paddingRight: "$16",

    maxWidth: "100%",
    overflowX: "scroll",
    overflowY: "hidden",
    display: "flex",
    gap: "$8",

    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
        display: "none"
    }
})