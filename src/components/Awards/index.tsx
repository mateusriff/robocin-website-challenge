import AwardsWrapper from "./style";
import Award from "./Award";
import Carousel from "./Carousel";
import { awardsList } from "./data";

const Awards = () => {
    const items = awardsList.map((award, index) => (
        <Award key={index} title={award.title} year={award.year}>
            {award.description}
        </Award>
    ));
    
    return (
        <AwardsWrapper>
            <Carousel items={items}/>
        </AwardsWrapper>
    );
};

export default Awards;