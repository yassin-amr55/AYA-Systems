import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AppsShowcase from './components/AppsShowcase'
import About from './components/About'
import Footer from './components/Footer'
import TodoMasterApp from './todo-master/TodoMasterApp' // Import TypeScript component
import SecureVaultApp from './secure-vault/SecureVaultApp' // Import SecureVault component
import './App.css'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Force immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Also try with a small delay to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
    // Additional fallback
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 100)
  }, [pathname])

  return null
}

// Loading wrapper component
function AppWithLoading({ theme, toggleTheme }) {
  const location = useLocation()

  return (
    <div className={`app ${theme}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<TodoMasterApp theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/daily-apps" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/SecureVault/*" element={<SecureVaultApp theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </div>
  )
}

// Home page component
function HomePage({ theme, toggleTheme }) {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <AppsShowcase />
      <About />
      <Footer />
    </>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <Router>
      <AppWithLoading theme={theme} toggleTheme={toggleTheme} />
    </Router>
  )
}

export default App