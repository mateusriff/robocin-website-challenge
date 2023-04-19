import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Inter } from 'next/font/google'
import { Banner, Activities, Sponsors, AboutUs } from '@/components'

const inter = Inter({ subsets: ['latin'] })

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
