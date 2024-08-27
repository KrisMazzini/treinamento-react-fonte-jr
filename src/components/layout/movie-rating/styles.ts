import { styled } from "@/styles"

export const Container = styled("div", {
    borderRadius: "$full",
    position: "relative",
    display: "inline-block",

    background: "$zinc-800",

    svg: {
        transform: "rotate(-90deg)"
    },

    variants: {
        size: {
            sm: {
                width: "$10",
                height: "$10",
            },

            md: {
                width: "$16",
                height: "$16",
            }
        }
    },

    defaultVariants: {
        size: "sm"
    }
})

export const Content = styled("span", {
    borderRadius: "$full",

    position: "absolute",
    top: "$1",
    left: "$1",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background: "$zinc-950",

    variants: {
        size: {
            sm: {
                width: "$8",
                height: "$8",

                fontSize: "$md",

                span: {
                    fontSize: 6,
                    position: "absolute",
                    right: 2,
                    top: 6,
                },
            },

            md: {
                width: "$14",
                height: "$14",

                fontSize: "$3xl",

                span: {
                    fontSize: 12,
                    position: "absolute",
                    right: 3,
                    top: 10,
                },
            }
        }
    },
})