import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import Card from '@/components/Card'
import Footer from '@/components/layout/Footer'
import Seo from '@/components/Seo'
import path from 'path'


export default function Home() {
  return (
    <>
      <Seo
        description='Learn, experiment and innovate with new technology.'
        title='The Dev Lab'
        templateTitle='Learn, Experiment, Innovate'
      />
      <Navbar />
      <main className='max-w-7xl mx-auto'>
        <Hero />
        <div className='grid grid-cols-1 gap-10 px-8 mx-auto lg:grid-cols-3 lg:px-16 lg:gap-16 py-8 lg:py-16 '>
          <Card
            imageUrl="/images/home/atom.png"
            alt='alt'
            title='Atoms'
            description='Brief tutorials that cover foundational aspects of programming, libraries, frameworks, and tools.'
            href="/atoms"
          />
          <Card
            imageUrl="/images/home/molecules.png"
            alt='alt'
            title='Molecules'
            description='Tutorials that delve into more complex programming topics, integrations, and features.'
            href="/molecules"
          />
          <Card
            imageUrl="/images/home/organisms.png"
            alt='alt'
            title='Organisms'
            description='In-depth tutorials that guide you through the process of building complete projects and applications from start to finish.'
            href="/organisms"
          />
        </div>
      </main >
      <Footer />
    </>
  )
}
