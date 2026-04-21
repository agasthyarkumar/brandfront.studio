import { useState, useCallback, Component } from 'react'
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

class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: '#d4af37', fontFamily: 'serif', textAlign: 'center', padding: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Dragon</h1>
            <p style={{ color: '#a08860' }}>Something went wrong. Please refresh the page.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const showToast = useCallback((message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => setToast(t => ({ ...t, show: false })), 4200)
  }, [])

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}
