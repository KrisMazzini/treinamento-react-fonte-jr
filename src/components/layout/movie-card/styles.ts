import { styled } from "@/styles"

export const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "$1"
})

export const Poster = styled("img", {
    width: "$40",
    height: "$60",

    borderRadius: "$xs",
})

export const Content = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    gap: "$1",
})

export const Details = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "$1"
})

export const Name = styled("span", {
    fontWeight: "$bold"
})