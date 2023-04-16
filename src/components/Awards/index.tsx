import AwardsWrapper from "./style";
import Award from "./Award";
import Carousel from "./Carousel";

const Awards = () => {
    const items = [
        <Award title="CAMPEÃO MUNDIAL EM SSL">
            1º lugar na RoboCup 2022 - Divisão B
        </Award>,
        <Award title="CAMPEÃO LATINO-AMERICANO EM SSL">
            1º lugar no Campeonato Latino-Americano 
            de Robótica e 3º lugar na RoboCup 2021
        </Award>,
        <Award title="CAMPEÃO LATINO-AMERICANO EM SIMULAÇÃO 2D">
            1º lugar no Campeonato Latino-Americano 
            de Robótica, 3º lugar na IronCup, 7º
            na RoboCup
        </Award>,
    ];
    
    return (
        <AwardsWrapper>
            <Carousel items={items}/>
        </AwardsWrapper>
    );
};

export default Awards;