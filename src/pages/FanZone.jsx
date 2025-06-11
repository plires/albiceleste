import slideMobile from '@/assets/img/fan-zone/header-fan-zone-mobile.webp'
import slideDesktop from '@/assets/img/fan-zone/header-fan-zone.webp'
import DetailsSection from '@/components/commons/DetailsSection.jsx'
import Separador from '@/components/commons/Separador.jsx'

import { getItemsFanZone, getImageURL } from '@/utils/dataUtils.js'

import './sub-sections.css'

const FanZone = () => {
  const items = getItemsFanZone('items')
  return (
    <section data-aos='fade-up' className='subSections fanZone'>
      <div className='contentTitle'>
        <h1>
          FAN<span>ZONE</span>
        </h1>
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
              La Fan Zone Albiceleste en Miami será el destino gratuito por
              excelencia para los fanáticos del fútbol durante la Copa Mundial
              FIFA 2026.
            </p>
            <p data-aos='fade-up'>
              Combinando gastronomía de primer nivel, entretenimiento y
              transmisiones en vivo de los partidos en pantallas gigantes de
              alta definición, ofrecerá una experiencia completamente inmersiva
              para vivir el Mundial como en ningún otro lugar.
            </p>
            <p data-aos='fade-up'>
              La Fan Zone también contará con estudios de transmisión, un área
              de hospitalidad VIP y una nutrida agenda de shows en vivo y
              actividades pensadas para los hinchas.
            </p>
          </div>
        </div>
      </div>

      <DetailsSection items={items} title='PRINCIPALES ATRACCIONES' />

      <Separador size='sm' />
    </section>
  )
}

export default FanZone
