import { SocialMediaWrapper, StyledImage } from "./style";
import { socialMediaData } from "./socialMediaData";

const SocialMedia = () => {
    return (
        <SocialMediaWrapper>
            {socialMediaData.map((item, index) => (
                <a key={index} href={item.url} target="_blank">
                    <StyledImage src={item.img} alt={item.alt} />
                </a>
            ))}
        </SocialMediaWrapper>
    );
};

export default SocialMedia;