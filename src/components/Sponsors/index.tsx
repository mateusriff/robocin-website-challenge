import SponsorsWrapper from './style';
import Image from 'next/image';
import { CESARLogo, CInLogo, hsbsLogo, MicrosoftLogo, MouraLogo, VeroliLogo } from '@/assets';

const Sponsors = () => {
    return(
        <SponsorsWrapper>
            <Image src={CInLogo} alt='Logo CIn'/>
            <Image src={MicrosoftLogo} alt='Logo Microsoft'/>
            <Image src={CESARLogo} alt='Logo Cesar'/>
            <Image src={MouraLogo} alt='Logo Moura'/>
            <Image src={VeroliLogo} alt='Logo Veroli'/>
            <Image src={hsbsLogo} alt='Logo HSBS'/>
        </SponsorsWrapper>
    );
};

export default Sponsors;