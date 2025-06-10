import Slide from '@/components/home/Slide.jsx'
import Events from '@/components/home/Events.jsx'
import Cards from '@/components/home/Cards.jsx'
import Cta from '@/components/home/Cta.jsx'

import ctaAlbiceleste from '@/assets/img/albiceleste-saber-mas.webp'
import ctaTienda from '@/assets/img/tienda-oficial.webp'

import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <Slide />
      <Events />
      <Cards />
      <section className='container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='row'>
              <Cta
                imgSrc={ctaAlbiceleste}
                text='ALBICELESTE'
                backgroundText='secondary'
                textButton='QUIERO SABER MÁS'
                backgroundButton='third'
                link='#'
              />

              <Cta
                imgSrc={ctaTienda}
                text='TIENDA OFICIAL'
                backgroundText='third'
                textButton='PROXIMAMENTE'
                backgroundButton='secondary'
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home
