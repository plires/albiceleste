import slideMobile from '@/assets/img/albiceleste/header-albiceleste-mobile.webp'
import slideDesktop from '@/assets/img/albiceleste/header-albiceleste.webp'
import DetailsSection from '@/components/commons/DetailsSection.jsx'
import Separador from '@/components/commons/Separador.jsx'

import { getItemsAlbicelesteItinerante } from '@/utils/dataUtils.js'

import './sub-sections.css'

const AlbicelesteItinerante = () => {
  const items = getItemsAlbicelesteItinerante('items')
  return (
    <section data-aos='fade-up' className='subSections albicelesteItinerante'>
      <div className='contentTitle'>
        <h1>ALBICELESTE ITINERANTE</h1>
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
              La Albiceleste Itinerante se activará en cada ciudad donde juegue
              Argentina durante la Copa Mundial de la FIFA 2026. Estos espacios
              reunirán a los fanáticos antes, durante y después de los partidos
              creando un punto de encuentro para la pasión Argentina donde sea
              que juguemos.
            </p>
            <p data-aos='fade-up'>
              Estarán ubicados en zonas de alto tránsito cerca de los estadios o
              en centros urbanos, cada pop-up contará con pantallas gigantes,
              puestos de merchandising y activaciones para los hinchas.
            </p>
          </div>
        </div>
      </div>

      <DetailsSection
        items={items}
        title='ACTIVACIONES'
        description='La Albiceleste Itinerante será la mejor forma de
        acompañar a la Selección y los Hinchas en todos los partidos:'
      />

      <Separador size='sm' />
    </section>
  )
}

export default AlbicelesteItinerante
