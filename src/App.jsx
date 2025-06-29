import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from '@/context/app'
import ScrollToTop from '@/utils/scrollToTop'

import { ToastContainer } from 'react-toastify'

import Header from '@/components/commons/Header'
import Home from '@/pages/Home'
import FanZone from '@/pages/FanZone'
import CulturaAlbiceleste from '@/pages/CulturaAlbiceleste'
import AlbicelesteItinerante from '@/pages/AlbicelesteItinerante'
import CasaCampeon from '@/pages/CasaCampeon'
import Tienda from '@/pages/Tienda'
import Faqs from '@/pages/Faqs'
import NotFound from '@/pages/NotFound'
import Footer from '@/components/commons/Footer'

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <ToastContainer autoClose={false} />
        <main className='page'>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/fan-zone' element={<FanZone />} />
            <Route path='/casa-campeon' element={<CasaCampeon />} />
            <Route
              path='/cultura-albiceleste'
              element={<CulturaAlbiceleste />}
            />
            <Route
              path='/albiceleste-itinerante'
              element={<AlbicelesteItinerante />}
            />
            <Route path='/tienda' element={<Tienda />} />
            {/* <Route path='/faqs' element={<Faqs />} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AppProvider>
  )
}

export default App
