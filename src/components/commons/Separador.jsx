import imgLg from '@/assets/img/separador.webp'
import imgMd from '@/assets/img/separador-medium.webp'
import imgSm from '@/assets/img/separador-small.webp'

import './separador.css'

const Separador = ({ size }) => {
  let img
  switch (size) {
    case 'sm':
      img = imgSm
      break
    case 'md':
      img = imgMd
      break
    case 'lg':
    default:
      img = imgLg
  }

  return (
    <section className='Separador'>
      <img className='img-fluid' src={img} alt='separador' />
    </section>
  )
}

export default Separador
