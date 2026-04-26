import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import Destaques   from '@/components/Destaques'
import Menu        from '@/components/Menu'
import About       from '@/components/About'
import Reviews     from '@/components/Reviews'
import Contact     from '@/components/Contact'
import Footer      from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destaques />
        <Menu />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
