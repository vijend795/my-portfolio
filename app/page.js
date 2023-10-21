import Image from 'next/image'
import Intro from './component/intro'
import Projects from './component/projects'
import Experience from './component/experience'
import ContactUs from './component/contactUs'
import Skills from './component/skills'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Intro />
    <Projects/>
    <Skills/>
    <Experience />
    <ContactUs />
   
    </main>
  )
}
