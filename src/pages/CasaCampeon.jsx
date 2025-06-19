import slideMobile from '@/assets/img/casa/header-casa-mobile.webp'
import slideDesktop from '@/assets/img/casa/header-casa.webp'
import DetailsSection from '@/components/commons/DetailsSection.jsx'
import Separador from '@/components/commons/Separador.jsx'

import { getItemsCasa } from '@/utils/dataUtils.js'

import './sub-sections.css'

const CasaCampeon = () => {
  const items = getItemsCasa('items')
  return (
    <section data-aos='fade-up' className='subSections casa'>
      <div className='contentTitle'>
        <h1>LA CASA DEL CAMPEÓN</h1>
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
              La Casa del Campeón – Experiencia Albiceleste es un recorrido
              sensorial y emocional que invita a cada visitante a sumergirse en
              el corazón de la selección argentina y de sus hinchas. Es el
              espacio donde el hincha y el jugador se encuentran, donde la
              pasión y la gloria del fútbol argentino se viven en primera
              persona.
            </p>
            <p data-aos='fade-up'>
              Desde el momento en que el visitante cruza la entrada, la
              experiencia está pensada para que sienta la fuerza de la identidad
              Albiceleste, una identidad que une a todos los argentinos en una
              sola voz y un solo corazón.
            </p>
          </div>
        </div>
      </div>

      <DetailsSection items={items} title='DETALLES DE LA EXPERIENCIA' />

      <Separador size='sm' />
    </section>
  )
}

export default CasaCampeon
