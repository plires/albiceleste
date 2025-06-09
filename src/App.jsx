import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from '@/context/app'
import ScrollToTop from '@/utils/scrollToTop'

import Header from '@/components/commons/Header'
import Home from '@/pages/Home'
import CasaCampeon from '@/pages/CasaCampeon'
import NotFound from '@/pages/NotFound'
import Footer from '@/components/commons/Footer'

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <main className='page'>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/casa-campeon' element={<CasaCampeon />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AppProvider>
  )
}

export default App
