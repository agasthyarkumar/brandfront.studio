import { useState, useCallback } from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Ticker    from './components/Ticker'
import Highlights from './components/Highlights'
import About     from './components/About'
import Menu      from './components/Menu'
import Gallery   from './components/Gallery'
import Reserve   from './components/Reserve'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import Toast     from './components/Toast'

export default function App() {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const showToast = useCallback((message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => setToast(t => ({ ...t, show: false })), 4200)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Highlights />
        <About />
        <Menu />
        <Gallery />
        <Reserve showToast={showToast} />
        <Contact />
      </main>
      <Footer />
      <Toast {...toast} />
    </>
  )
}
