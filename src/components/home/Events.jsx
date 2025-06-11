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
        <div data-aos='fade-up' className='evento tienda'>
          <div className='overlay'>
            <span className='proximamente'>PRÓXIMAMENTE</span>
          </div>
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
        </div>
        {/* Tienda end */}

        {/* Experiencia */}
        <div data-aos='fade-up' className='evento experiencia'>
          <div className='overlay'>
            <span className='proximamente'>PRÓXIMAMENTE</span>
          </div>
          <div className='left'>
            <span>EXPERIENCIA</span>
          </div>
          <div className='separator'></div>
          <div className='right'>
            <img src={casa} alt='casa' />
          </div>
        </div>
        {/* Experiencia end */}

        {/* Bresh */}
        <Link
          to='https://www.tixr.com/groups/daernightclubsouthflorida/events/bresh-daer-nightclub-140998'
          data-aos='fade-up'
          className='evento bresh'
          target='_blank'
          rel='noopener'
        >
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
        <Link
          to='https://www.fifa.com/es/tournaments/mens/worldcup/canadamexicousa2026/articles/calendario-fixture-mundial-2026-partidos-fechas'
          data-aos='fade-up'
          className='evento fixture'
          target='_blank'
          rel='noopener'
        >
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
        <div data-aos='fade-up' className='evento fanzone'>
          <div className='overlay'>
            <span className='proximamente'>PRÓXIMAMENTE</span>
          </div>
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
        </div>
        {/* FanZone end */}
      </div>
    </section>
  )
}

export default Events
