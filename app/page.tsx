import Image from 'next/image'
import HeroSection from './components/HeroSection'
import OMeni from './components/OMeni'
import Citat from './components/Citat'
import Stats from './components/Stats'
export default function Home() {
  return (
    <main >

      <HeroSection />
      <OMeni />
      <Citat />
      <Stats />
      <div>
      </div>
    </main>
  )
}
