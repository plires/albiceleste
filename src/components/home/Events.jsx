import logoAfa from '@/assets/img/afa-white.webp'
import escudos from '@/assets/img/escudos.webp'
import bresh from '@/assets/img/bresh.webp'

import './events.css'

const Events = () => {
  return (
    <section className='eventos container-fluid'>
      <div data-aos='fade-up' className='row'>
        <div className='col-md-12'>
          <h2>PRÓXIMOS EVENTOS:</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-xxl-3'>
          <div data-aos='fade-up' className='evento bresh'>
            <div className='left'>
              <img src={bresh} alt='bresh' />
            </div>
            <div className='separator'></div>
            <div className='right'>
              <div className='content'>
                <span>MUY PRONTO</span>
                <button className='btn comprar transition'>
                  COMPRAR TICKETS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xxl-3'>
          <div data-aos='fade-up' className='evento experiencia'>
            <div className='left'>
              <img src={logoAfa} alt='logo afa' />
              <div className='content'>
                <span>EXPERIENCIA</span>
                <button className='btn comprar transition'>
                  COMPRAR TICKETS
                </button>
              </div>
            </div>
            <div className='separator'></div>
            <div className='right'>
              <span>PROXIMAMENTE</span>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xxl-3'>
          <div data-aos='fade-up' className='evento fanzone'>
            <div className='left'>
              <span>FANZONE</span>
            </div>
            <div className='separator'></div>
            <div className='right'>
              <div className='content'>
                <span>PROXIMAMENTE</span>
                <button className='btn comprar transition'>
                  COMPRAR TICKETS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xxl-3'>
          <div data-aos='fade-up' className='evento amistoso'>
            <div className='left'>
              <div className='content'>
                <span>PARTIDO AMISTOSO</span>
                <img
                  className='img-fluid escudos'
                  src={escudos}
                  alt='escudos partido amistoso'
                />
              </div>
            </div>
            <div className='separator'></div>
            <div className='right'>
              <div className='content'>
                <span>PROXIMAMENTE</span>
                <button className='btn comprar transition'>
                  COMPRAR TICKETS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
