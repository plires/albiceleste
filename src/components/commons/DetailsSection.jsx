import { getImageURL } from '@/utils/dataUtils.js'

import './details-section.css'

const DetailsSection = ({ items, title, description = false }) => {
  return (
    <div className='detailsSection'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='content'>
              <h3 data-aos='fade-up'>{title}</h3>
              {description && (
                <p data-aos='fade-up' className='description'>
                  {description}
                </p>
              )}
              {items.map(item => (
                <div data-aos='fade-up' className='item' key={item.id}>
                  <div>
                    <img src={getImageURL(item.img_src)} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                  {item.description && (
                    <p className='descriptionItem'>{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailsSection
