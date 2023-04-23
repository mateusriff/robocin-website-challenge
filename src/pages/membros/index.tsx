import { NavInterface, Members, Sponsors } from '@/components'
import MembrosPageWrapper from './style'

export default function MembersPage() { 
  return (
    <>    
        <NavInterface />
        <MembrosPageWrapper>
            <Members />
        </MembrosPageWrapper>
        <Sponsors/>
    </>
    )
  }
  