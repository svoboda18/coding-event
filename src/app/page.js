import Image from 'next/image'
import About from '@/components/About'
import Agenda from '@/components/About&Agenda/Agenda'

export default function Home() {
  return (
    <main>
      <About/>
      <Agenda/>
    </main>
  )
}
