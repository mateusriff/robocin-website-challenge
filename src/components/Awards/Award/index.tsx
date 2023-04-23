import { AwardWrapper, StyledAward, StyledDot } from "./style";

type AwardProps = {
    title: string,
    year: string,
    children?: React.ReactNode,
}

const Award = ({ title, year, children }: AwardProps) => {
    return (
        <AwardWrapper>
            <StyledAward>
                <h2>{year}</h2>
                <h1>{title}</h1>
                <p>{children}</p>
            </StyledAward>
            <StyledDot>
                <div/>
            </StyledDot>
        </AwardWrapper>
    );
};

export default Award;