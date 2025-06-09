import slideMobile from '@/assets/img/slide-mobile.webp'
import slideDesktop from '@/assets/img/slide-desktop.webp'
import frase from '@/assets/img/frase.webp'

import './slide.css'

const Slide = () => {
  return (
    <section data-aos='fade-up' className='slide'>
      <picture>
        <source media='(max-width: 768px)' srcSet={slideMobile} />
        <img className='img-fluid' src={slideDesktop} alt='slide albiceleste' />
      </picture>
      <img className='img-fluid frase' src={frase} alt='frase albiceleste' />
    </section>
  )
}

export default Slide
