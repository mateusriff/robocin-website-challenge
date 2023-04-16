import AwardWrapper from "./style";

type AwardProps = {
    title: string;
    children?: React.ReactNode;
}

const Award = ({ title, children }: AwardProps) => {
    return (
        <AwardWrapper>
            <div>
                <h1>{title}</h1>
                <p>{children}</p>
            </div>
        </AwardWrapper>
    );
};

export default Award;