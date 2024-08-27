import { styled } from "@/styles"

export const Container = styled("div", {
    width: "$10",
    height: "$10",

    borderRadius: "$full",
    position: "relative",
    display: "inline-block",

    background: "$zinc-800",

    svg: {
        transform: "rotate(-90deg)"
    },
})

export const Content = styled("span", {
    width: "$8",
    height: "$8",
    borderRadius: "$full",

    position: "absolute",
    top: "$1",
    left: "$1",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background: "$zinc-950",

    span: {
        fontSize: 6,
        position: "absolute",
        right: 2,
        top: 6,
    }
})