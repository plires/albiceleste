import { NavLink, Link } from 'react-router-dom'

import logoAfa from '@/assets/img/afa-color.webp'
import logoAfaDorado from '@/assets/img/logo-small.svg'
import grupoOctubre from '@/assets/img/grupo-octubre.webp'
import board from '@/assets/img/board.webp'
import facebook from '@/assets/img/facebook.svg'
import tiktok from '@/assets/img/tiktok.svg'
import instagram from '@/assets/img/instagram.svg'

import './footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 left'>
            <img
              className='logoAfa img-fluid'
              src={logoAfa}
              alt='logo afa color'
            />
            <div className='contentSocial'>
              <Link
                className='transition'
                to='https://www.tiktok.com/@afaalbiceleste'
                target='_blank'
                rel='noopener'
              >
                <img className='img-fluid' src={tiktok} alt='tiktok footer' />
              </Link>
              <Link
                className='transition'
                to='https://www.instagram.com/afaalbiceleste'
                target='_blank'
                rel='noopener'
              >
                <img
                  className='img-fluid'
                  src={instagram}
                  alt='instagram footer'
                />
              </Link>
            </div>
          </div>
          <div className='col-md-9 right'>
            <ul className='navFooter'>
              <li>
                <NavLink className='transition' to='/fan-zone'>
                  FAN ZONE
                </NavLink>
              </li>
              <li>
                <NavLink className='transition' to='/cultura-albiceleste'>
                  POP UPS
                </NavLink>
              </li>
              <li>
                <NavLink className='transition' to='/casa-campeon'>
                  LA CASA
                </NavLink>
              </li>
              <li>
                <NavLink className='transition' to='/tienda'>
                  TIENDA
                </NavLink>
              </li>
              <li>
                <NavLink className='transition' to='/faqs'>
                  FAQS
                </NavLink>
              </li>
            </ul>
            <div className='contentLogos'>
              <img
                className='img-fluid logoAfaDorado'
                src={logoAfaDorado}
                alt='logo afa dorado'
              />
              <img
                className='img-fluid'
                src={grupoOctubre}
                alt='grupo octubre'
              />
              <span className='copy'>
                Copyright &copy; {new Date().getFullYear()}
              </span>
              <div className='board'>
                Desarrollado por
                <Link
                  to='https://theboardagency.com/'
                  className='transition'
                  target='_blank'
                  rel='noopener'
                >
                  <img
                    className='img-fluid transition'
                    src={board}
                    alt='logo board'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
