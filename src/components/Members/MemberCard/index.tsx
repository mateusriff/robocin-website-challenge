import { MemberCardWrapper, SocialMediaContainer, MemberImage, SocialMediaImage } from "./style";
import { Linkedin, Github } from "@/assets";

type MemberCardProps = {
    profilePicture: string,
    name: string,
    category: string,
    github?: string,
    linkedin?: string,
} 

const MemberCard = ({ profilePicture, name, category, github, linkedin }: MemberCardProps) => {
    return(
        <MemberCardWrapper>
            <MemberImage src={profilePicture} alt="Membro"/>
            <div>
                <h3>{name}</h3>
                <p>{category}</p>
            </div>
            <SocialMediaContainer>
                {github !== '' &&                
                    <a href={github} target="_blank">
                        <SocialMediaImage src={Github} alt="Github"/>
                    </a>
                }
                {linkedin !== '' &&                
                    <a href={linkedin} target="_blank">
                        <SocialMediaImage src={Linkedin} alt="Github"/>
                    </a>
                }
            </SocialMediaContainer>
        </MemberCardWrapper>
    );
}

MemberCard.defaultProps = {
    github: '',
    linkedin: '',
}

export default MemberCard;