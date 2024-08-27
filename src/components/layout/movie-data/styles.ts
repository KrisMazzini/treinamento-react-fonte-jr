import { styled } from "@/styles";

export const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "$1",

    color: "$zinc-400",

    span: {
        fontSize: "$sm",
    }
})