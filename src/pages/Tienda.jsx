import slideMobile from '@/assets/img/slide-mobile.webp'
import slideDesktop from '@/assets/img/slide-desktop.webp'

import './tienda.css'

const Tienda = () => {
  return (
    <section className='tienda'>
      <section data-aos='fade-up'>
        <picture>
          <source media='(max-width: 768px)' srcSet={slideMobile} />
          <img
            className='img-fluid'
            src={slideDesktop}
            alt='slide albiceleste'
          />
        </picture>
      </section>

      <section className='container info'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'> </div>
        </div>
        <div className='contentTitle'>
          <h1 className='anton'>Tienda Albiceleste</h1>
        </div>
        <h2 className='anton'>La pasión no solo se grita, también se viste.</h2>
        <p>
          Muy pronto vas a encontrar productos Albiceleste para alentar desde
          cualquier rincón del mundo. <br />
          Próximamente...
        </p>
      </section>
    </section>
  )
}

export default Tienda
