import { Email, Facebook, Instagram, Linkedin, Github, Youtube } from "@/assets";
import { SocialMediaWrapper, StyledImage } from "./style";
import Image from "next/image";

const SocialMedia = () => {
    return (
        <SocialMediaWrapper>
            <a href="mailto:robocin@cin.ufpe.br">
                <StyledImage src={Email} alt="E-mail" />
            </a>
            <a href="https://www.facebook.com/robocin/" target="_blank">
                <StyledImage src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/robocinufpe/" target="_blank">
                <StyledImage src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/robocin/?trk=ppro_cprof&originalSubdomain=br" target="_blank">
                <StyledImage src={Linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/robocin" target="_blank">
                <StyledImage src={Github} alt="Github" />
            </a>
            <a href="https://www.youtube.com/channel/UCi21SoE4Q4y4_i27VOCUdTw" target="_blank">
                <StyledImage src={Youtube} alt="Youtube" />
            </a>
        </SocialMediaWrapper>
    );
};

export default SocialMedia;