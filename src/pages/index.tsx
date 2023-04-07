import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import Card from '@/components/Card'
import Footer from '@/components/layout/Footer'
import Seo from '@/components/Seo'


export default function Home() {
  return (
    <>
      <Seo />
      <Navbar />
      <main className='max-w-7xl mx-auto'>
        <Hero />
        <div className='grid grid-cols-1 gap-10 px-8 mx-auto lg:grid-cols-3 lg:px-16 lg:gap-16 py-8 lg:py-16 '>
          <Card
            imageUrl="/images/home/atom.png"
            alt='alt'
            title='Atoms'
            description='Small, focused code snippets that address specific programming tasks, syntax, or concepts. '
            href="/atoms"
          />
          <Card
            imageUrl="/images/home/molecules.png"
            alt='alt'
            title='Molecules'
            description='Brief tutorials that cover foundational aspects of programming, libraries, frameworks, and tools.'
            href="/molecules"
          />
          <Card
            imageUrl="/images/home/organisms.png"
            alt='alt'
            title='Organisms'
            description='Tutorials that delve into more complex programming topics, integrations, and features.'
            href="/organisms"
          />
        </div>
      </main >
      <Footer />
    </>
  )
}
