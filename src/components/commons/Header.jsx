import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import logoLarge from '@/assets/img/logo-large.svg'
import logoSmall from '@/assets/img/logo-small.svg'
import facebook from '@/assets/img/facebook.svg'
import tiktok from '@/assets/img/tiktok.svg'
import instagram from '@/assets/img/instagram.svg'
import IconHumberguer from '@/components/commons/IconHumberguer'
import CloseHumberguer from '@/components/commons/CloseHumberguer'

import '@/components/commons/header.css'

const Header = () => {
  const headerElement = useRef()
  const navElement = useRef()

  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false)
  const [navMobile, setNavMobile] = useState(IconHumberguer)
  const [logo, setLogo] = useState(logoLarge)

  const changeIconMobile = () => {
    if (isNavMobileOpen) {
      setNavMobile(IconHumberguer)
      setIsNavMobileOpen(false)
      navElement.current.classList.remove('open')
    } else {
      setNavMobile(CloseHumberguer)
      setIsNavMobileOpen(true)
      navElement.current.classList.add('open')
    }
  }

  const closeNavMobile = () => {
    setIsNavMobileOpen(false)
    setNavMobile(IconHumberguer)
    navElement.current.classList.remove('open')
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 100) {
        headerElement.current.classList.add('fixed')
        setLogo(logoSmall)
      } else {
        headerElement.current.classList.remove('fixed')
        setLogo(logoLarge)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className='transition' ref={headerElement}>
      <section className='content_logo'>
        <Link to='/' onClick={() => closeNavMobile()}>
          <img
            className='logo transition img-fluid'
            src={logo}
            alt='logo albiceleste'
          />
        </Link>
      </section>
      <nav className='transition' ref={navElement}>
        <ul>
          <li>
            <NavLink
              className='transition anton'
              to='/fan-zone'
              onClick={() => changeIconMobile()}
            >
              FAN ZONE
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition anton'
              to='/pop-ups'
              onClick={() => changeIconMobile()}
            >
              POP UPS
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition anton'
              to='/casa-campeon'
              onClick={() => changeIconMobile()}
            >
              LA CASA
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition anton'
              to='/tienda'
              onClick={() => changeIconMobile()}
            >
              TIENDA
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition anton'
              to='/faqs'
              onClick={() => changeIconMobile()}
            >
              FAQS
            </NavLink>
          </li>
        </ul>
        <ul className='social transition'>
          <li>
            <NavLink
              className='transition anton'
              to='https://www.instagram.com/afaalbiceleste'
              target='_blank'
              rel='noopener'
              onClick={() => changeIconMobile()}
            >
              <img
                className='img-fluid transition'
                src={instagram}
                alt='instagram'
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition anton'
              to='https://www.tiktok.com/@afaalbiceleste'
              target='_blank'
              rel='noopener'
              onClick={() => changeIconMobile()}
            >
              <img
                className='img-fluid transition'
                src={tiktok}
                alt='tik tok'
              />
            </NavLink>
          </li>
        </ul>
      </nav>
      <span onClick={() => changeIconMobile()}>{navMobile}</span>
    </header>
  )
}

export default Header
