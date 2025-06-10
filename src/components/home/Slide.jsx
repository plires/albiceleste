import slideMobile from '@/assets/img/slide-mobile.webp'
import slideDesktop from '@/assets/img/slide-desktop.webp'
import albicelesteAfa from '@/assets/img/albiceleste-afa.webp'

import './slide.css'

const Slide = () => {
  return (
    <section data-aos='fade-up' className='slide'>
      <picture>
        <source media='(max-width: 768px)' srcSet={slideMobile} />
        <img className='img-fluid' src={slideDesktop} alt='slide albiceleste' />
      </picture>
      <div className='content'>
        <img
          className='img-fluid'
          src={albicelesteAfa}
          alt='albicelesteAfa albiceleste'
        />
        <h1 className='anton'>CONECTANDO A LOS HINCHAS ARGENTINOS</h1>
        <h2 className='anton'>ALREDEDOR DEL MUNDO.</h2>
      </div>
    </section>
  )
}

export default Slide
