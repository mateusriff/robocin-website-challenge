import { NavInterface, Sponsors, PaperCard, Footer } from '@/components'
import { PageWrapper, PapersWrapper } from './style'
import researchData from './data'

export default function ResearchPage() {
  return (
    <>
      <NavInterface />
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
      <Sponsors />
      <Footer />
    </>
  )
}
