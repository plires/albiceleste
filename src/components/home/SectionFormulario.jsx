import logoAlbiceleste from '@/assets/img/logo-large.svg'
import Formulario from '@/components/commons/Formulario.jsx'

import './section-formulario.css'

const SectionFormulario = () => {
  return (
    <section className='sectionFormulario container'>
      <div className='row'>
        <div className='col-lg-10 offset-lg-1'>
          <div className='row'>
            <div className='col-md-6 contentLogo'>
              <img
                data-aos='fade-up'
                className='img-fluid logoAfa'
                src={logoAlbiceleste}
                alt='logo albiceleste'
              />
            </div>
            <div data-aos='fade-up' className='col-md-6 contentForm'>
              <Formulario />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SectionFormulario
