import { SocialMediaWrapper, StyledImage } from "./style";
import { socialMediaData } from "./socialMediaData";

const SocialMedia = () => {
    return (
        <SocialMediaWrapper>
            {socialMediaData.map((item, index) => (
                <a key={index} href={item.url}>
                    <StyledImage src={item.img} alt={item.alt} />
                </a>
            ))}
        </SocialMediaWrapper>
    );
};

export default SocialMedia;