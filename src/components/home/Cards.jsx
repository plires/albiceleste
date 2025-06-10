import { Link } from 'react-router-dom'

import fanZone from '@/assets/img/fanzone.webp'
import miami from '@/assets/img/miami.webp'
import casaCampeon from '@/assets/img/casacampeon.webp'
import tienda from '@/assets/img/tienda.webp'

import './cards.css'

const Cards = () => {
  return (
    <section className='cards container'>
      <div className='row'>
        <div className='col-lg-10 offset-lg-1'>
          <div className='row'>
            <div data-aos='fade-up' className='col-sm-6 p-0 contentCard'>
              <Link to='/miami'>
                <img className='img-fluid' src={miami} alt='miami card' />
              </Link>
            </div>
            <div data-aos='fade-up' className='col-sm-6 p-0 contentCard'>
              <Link to='/fan-zone'>
                <img className='img-fluid' src={fanZone} alt='fan zone card' />
              </Link>
            </div>
            <div data-aos='fade-up' className='col-sm-6 p-0 contentCard'>
              <Link to='/casa-campeon'>
                <img
                  className='img-fluid'
                  src={casaCampeon}
                  alt='la casa del campeon card'
                />
              </Link>
            </div>
            <div data-aos='fade-up' className='col-sm-6 p-0 contentCard'>
              <Link to='/tienda'>
                <img className='img-fluid' src={tienda} alt='tienda card' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
