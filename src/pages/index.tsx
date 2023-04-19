import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Banner, Activities, Sponsors, AboutUs } from '@/components'

export default function Home() {
  return (
      <>
        <Banner/>
        <Activities/>
        <AboutUs/>
        <Sponsors/>
      </>
  )
}
