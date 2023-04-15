import { CardWrapper, CardTitle } from "./style";

type CardProps = {
    title: string;
    href: string;
    children?: React.ReactNode;
}

const Card = ({ title, href, children }: CardProps) => {
    return(
        <CardWrapper href={href}>
            <CardTitle>
                {title}
            </CardTitle>
            <p>{children}</p>
        </CardWrapper>
    );
};

export default Card;