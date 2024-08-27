import { styled } from "@/styles";

export const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "$2",
})

export const Name = styled("span", {
    fontSize: "$lg",
    fontWeight: "$bold",
})

export const Photo = styled("img", {
    width: "$14",
    height: "$14",

    borderRadius: "$full",
})