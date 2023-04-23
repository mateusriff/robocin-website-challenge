import { StaticImageData } from "next/image";
import { CardWrapper, CardTitle, StyledImage } from "./style";

type CardProps = {
    title: string,
    competition: string,
    description: string,
    image: StaticImageData,
}

const CategoryCard = ({ title, competition, description, image }: CardProps) => {
    return(
        <CardWrapper>
            <div>
                <CardTitle>
                    {title}
                    <p>{competition}</p>
                </CardTitle>
                <p>{description}</p>
            </div>
            <StyledImage src={image} alt="image"/>
        </CardWrapper>
    );
};

export default CategoryCard;