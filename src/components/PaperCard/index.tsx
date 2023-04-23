import { PaperCardWrapper, StyledImage } from "./style";
import { Paper } from "@/assets";

type PaperCardProps = {
    title: string,
    link: string,
};

const PaperCard = ({title, link}: PaperCardProps) => {
    return(
        <PaperCardWrapper href={link} target="_blank">
            <StyledImage src={Paper} alt={title}/>
            <p>{title}</p>
        </PaperCardWrapper>
    );
}

export default PaperCard;