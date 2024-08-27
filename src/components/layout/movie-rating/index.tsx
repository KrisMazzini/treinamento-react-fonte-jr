import { theme } from "@/styles";
import { Container, Content } from "./styles";

type MovieRatingProps = {
    progress: number
}

export function MovieRating({ progress }: MovieRatingProps) {
    const RADIUS = 20
    const STROKE_WIDTH = 4

    const progressColor = getProgressColor()

    const normalizedRadius = RADIUS - STROKE_WIDTH / 2
    const circumference = 2 * Math.PI * normalizedRadius
    const strokeDashoffset = circumference - (progress / 100) * circumference

    function getProgressColor() {
        const { colors } = theme

        if (progress < 50) {
            return colors.danger.value
        } 

        if (progress < 75) {
            return colors.warning.value
        }

        return colors.success.value
    }

    return (
        <Container>
            <svg
                width={RADIUS * 2}
                height={RADIUS * 2}
            >
                <circle
                    stroke={progressColor}
                    fill="transparent"
                    strokeWidth={STROKE_WIDTH}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={RADIUS}
                    cy={RADIUS}
                />
            </svg>

            <Content>
                {progress}
                <span>%</span>
            </Content>
        </Container>
    )
}