import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavInterface, Banner, Activities, Sponsors, AboutUs, OurCalendar } from '@/components'

export default function Home() {
  return (
      <>
        <NavInterface />
        <Banner />
        <Activities />
        <AboutUs />
        <OurCalendar />
        <Sponsors />
      </>
  )
}
