import Image from 'next/image'
import HeroSection from './components/HeroSection'
import OMeni from './components/OMeni'
import Citat from './components/Citat'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Projects from './components/Projects'
export default function Home() {
  return (
    <main >

      <HeroSection />
      <OMeni />
      <Citat />
      <Stats />
      <Skills />
      <Projects />
      <div>
      </div>
    </main>
  )
}
