import { Link } from 'react-router-dom'
import tienda from '@/assets/img/tienda-albiceleste.webp'
import casa from '@/assets/img/casa-del-campeon.webp'
import bresh from '@/assets/img/bresh.webp'
import logoCopa from '@/assets/img/logos-copa.webp'

import './events.css'

const Events = () => {
  return (
    <section className='eventos container-fluid'>
      <div data-aos='fade-up' className='row'>
        <div className='col-md-12'>
          <h2>PRÓXIMOS EVENTOS:</h2>
        </div>
      </div>

      <div className='row contentEventos'>
        {/* Tienda */}
        <Link to='#' data-aos='fade-up' className='evento tienda'>
          <div className='left'>
            <img src={tienda} alt='tienda' />
          </div>
          <div className='separator'></div>
          <div className='right'>
            <div className='content'>
              <span>MUY PRONTO</span>
              <button className='btn comprar transition'>VER TIENDA</button>
            </div>
          </div>
        </Link>
        {/* Tienda end */}

        {/* Experiencia */}
        <Link to='#' data-aos='fade-up' className='evento experiencia'>
          <div className='left'>
            <span>EXPERIENCIA</span>
          </div>
          <div className='separator'></div>
          <div className='right'>
            <img src={casa} alt='casa' />
          </div>
        </Link>
        {/* Experiencia end */}

        {/* Bresh */}
        <Link to='#' data-aos='fade-up' className='evento bresh'>
          <div className='left'>
            <img src={bresh} alt='bresh' />
          </div>
          <div className='separator'></div>
          <div className='right'>
            <div className='content'>
              <span>14 de Junio - MIAMI</span>
              <button className='btn comprar transition'>
                COMPRAR TICKETS
              </button>
            </div>
          </div>
        </Link>
        {/* Bresh end */}

        {/* Fixture */}
        <Link to='#' data-aos='fade-up' className='evento fixture'>
          <div className='left'>
            <img
              className='img-fluid escudos'
              src={logoCopa}
              alt='logo afa + copa'
            />
          </div>
          <div className='separator'></div>
          <div className='right'>
            <div className='content'>
              <span>FIXTURE</span>
              <button className='btn comprar transition'>VER FIXTURE</button>
            </div>
          </div>
        </Link>
        {/* Fixture end */}

        {/* FanZone */}
        <Link to='#' data-aos='fade-up' className='evento fanzone'>
          <div className='left'>
            <span>FANZONE</span>
          </div>
          <div className='separator'></div>
          <div className='right'>
            <div className='content'>
              <span>MIAMI 2026</span>
              <button className='btn comprar transition'>
                COMPRAR TICKETS
              </button>
            </div>
          </div>
        </Link>
        {/* FanZone end */}
      </div>
    </section>
  )
}

export default Events
