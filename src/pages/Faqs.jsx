import Separador from '@/components/commons/Separador.jsx'
import { getItemsFaqs } from '@/utils/dataUtils.js'
import 'bootstrap/dist/js/bootstrap.js'

import slideMobile from '@/assets/img/faq/header-faq-mobile.webp'
import slideDesktop from '@/assets/img/faq/header-faq.webp'

import './faqs.css'

const Faqs = () => {
  const items = getItemsFaqs('items')

  return (
    <section data-aos='fade-up' className='faqs'>
      <section className='header'>
        <picture>
          <source media='(max-width: 768px)' srcSet={slideMobile} />
          <img
            className='img-fluid'
            src={slideDesktop}
            alt='slide albiceleste'
          />
        </picture>
      </section>

      <section className='text container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <p data-aos='fade-up'>
              Albiceleste es el lugar del hincha. Siempre decimos que la
              Selección no juega sola, y esta vez quisimos hacer algo concreto:
              que el hincha tenga su espacio, su casa… Es un reconocimiento a
              los que hacen el esfuerzo, a los que dejan todo por estar.{' '}
            </p>
            <p data-aos='fade-up'>
              Porque la hinchada argentina es la más fiel, la más creativa y la
              más linda del mundo.
            </p>
            <p data-aos='fade-up'>
              Albiceleste es la forma de mostrarle al mundo lo que sentimos los
              argentinos por esta camiseta. Es una fiesta pensada para el
              hincha, una manera de decir gracias por estar siempre.
            </p>
            <p data-aos='fade-up'>
              La Selección es del pueblo, y el hincha se merece vivir este
              Mundial así: todos juntos, en una sola bandera. Albiceleste nace
              para proyectar al hincha argentino en el mundo, como protagonista
              cultural del Mundial 2026.
            </p>

            <div className='contentTitle'>
              <h1>FAQS</h1>
            </div>
          </div>
        </div>
      </section>

      <Separador size='md' />

      <section className='acordion container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='accordion' id='accordionFaq'>
              {items.map(item => {
                const headingId = `heading${item.id}`
                const collapseId = `collapse${item.id}`
                const isFirst = item.id === 1

                return (
                  <div className='accordion-item' key={item.id}>
                    <h2 className='anton accordion-header' id={headingId}>
                      <button
                        className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst ? 'true' : 'false'}
                        aria-controls={collapseId}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                      aria-labelledby={headingId}
                      data-bs-parent='#accordionExample'
                    >
                      <div
                        className='accordion-body'
                        dangerouslySetInnerHTML={{ __html: item.rta }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Separador size='lg' />
    </section>
  )
}

export default Faqs
