import { styled } from "@/styles";

import backgroundImage from '@/assets/auth-background-image.png'

export const Container = styled("div", {
    minHeight: "$full-h",

    display: "grid",
    gridTemplateColumns: "1fr 1fr"
})

export const Image = styled("div", { 
    background: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
})

export const Content = styled("div", {
    padding: "$16",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "$10",
})