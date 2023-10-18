import Image from 'next/image'
import Intro from './component/intro'
import Projects from './component/project'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Intro />
    <Projects/>
    </main>
  )
}
