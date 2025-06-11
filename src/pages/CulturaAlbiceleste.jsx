import slideMobile from '@/assets/img/cultura/header-cultura-mobile.webp'
import slideDesktop from '@/assets/img/cultura/header-cultura.webp'
import DetailsSection from '@/components/commons/DetailsSection.jsx'
import Separador from '@/components/commons/Separador.jsx'

import { getItemsCasa } from '@/utils/dataUtils.js'

import './sub-sections.css'

const CulturaAlbiceleste = () => {
  const items = getItemsCasa('items')
  return (
    <section data-aos='fade-up' className='subSections culturaAlbiceleste'>
      <div className='contentTitle'>
        <h1>SHOWS, FIESTAS Y EVENTOS CULTURALES</h1>
      </div>
      <picture>
        <source media='(max-width: 768px)' srcSet={slideMobile} />
        <img
          data-aos='fade-up'
          className='img-fluid imgHeader'
          src={slideDesktop}
          alt='slide albiceleste'
        />
      </picture>

      <div className='text container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <p data-aos='fade-up'>
              Como parte del universo Albiceleste, se desarrollará un calendario
              importante de eventos con foco en la música, el arte y la cultura
              argentina.
            </p>
            <p data-aos='fade-up'>
              Desde fiestas oficiales durante el Mundial, recitales de los
              artistas más populares o muestras de arte de referentes locales,
              todo el contenido está diseñado para prolongar la experiencia de
              los hinchas más allá del partido y consolidar nuevos espacios de
              encuentro en torno a la pasión argentina.
            </p>
          </div>
        </div>
      </div>

      <Separador size='sm' />
    </section>
  )
}

export default CulturaAlbiceleste
