import { Link } from 'react-router-dom'

import './cta.css'

const Cta = ({
  imgSrc,
  text,
  textButton,
  backgroundText,
  backgroundButton,
  link = false,
}) => {
  return (
    <div className='col-md-6 col-lg-12'>
      <div data-aos='fade-up' className='cta'>
        <img className='img-fluid' src={imgSrc} alt={textButton} />
        <h3 className={backgroundText}>{text}</h3>
        {link ? (
          <Link
            className={`${backgroundButton} btn anton transition`}
            to={link}
          >
            {textButton}
          </Link>
        ) : (
          <span className={`${backgroundButton} btn anton transition`}>
            {textButton}
          </span>
        )}
      </div>
    </div>
  )
}

export default Cta
