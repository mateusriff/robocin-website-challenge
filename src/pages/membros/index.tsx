import { NavInterface, Members, Sponsors, Footer } from '@/components'
import MembrosPageWrapper from './style'

export default function MembersPage() { 
  return (
    <>    
        <NavInterface />
        <MembrosPageWrapper>
            <Members />
        </MembrosPageWrapper>
        <Sponsors />
        <Footer />
    </>
    )
  }
  