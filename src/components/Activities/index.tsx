import { CardsWrapper } from "./style";
import Card from "../Card";

const Activities = () => {
    return(
        <CardsWrapper>
            <Card title='Competições ->' href='#'>
                Nós participamos de diversas competições, 
                como a RoboCup, a IRONCup e a LARC.
            </Card>
            <Card title='Pesquisa ->' href='#'>
                Professores e estudantes pesquisando dentro 
                dos problemas da robótica.
            </Card>
            <Card title='Desenvolvimento ->' href='#'>
                Nós projetamos e desenvolvemos a eletrônica, 
                a mecânica e a inteligência dos robôs.
            </Card>
        </CardsWrapper>
    );
};

export default Activities;