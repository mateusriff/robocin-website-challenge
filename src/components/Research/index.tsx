import PaperCard from './PaperCard';
import { PageWrapper, PapersWrapper } from './style'
import researchData from '@/data/researchData';

const Research = () => {
    return(
    <PageWrapper>
        <PapersWrapper>
            {researchData.map(({ year, papers }) => (
            <PapersWrapper key={year}>
                <h1>{year}</h1>
                <div>
                {papers.map(({ title, link }) => (
                    <PaperCard key={title} title={title} link={link} />
                ))}
                </div>
            </PapersWrapper>
            ))}
        </PapersWrapper>
    </PageWrapper>
    );
} 

export default Research;