import imgLg from '@/assets/img/separador.webp'
import imgSm from '@/assets/img/separador-small.webp'

import './separador.css'

const Separador = ({ size }) => {
  const img = size === 'sm' ? imgSm : imgLg

  return (
    <section className='Separador'>
      <img className='img-fluid' src={img} alt='separador' />
    </section>
  )
}

export default Separador
