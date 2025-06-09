import ImgCasaCampeon from '@/components/casa-campeon/ImgCasaCampeon.jsx'
import DataCasaCampeon from '@/components/casa-campeon/DataCasaCampeon.jsx'
import huella from '@/assets/img/huella.webp'

import './casa-campeon.css'

const CasaCampeon = () => {
  return (
    <section className='casaCampeon container'>
      <div className='row content'>
        <div data-aos='fade-up' className='col-lg-6 img'>
          <ImgCasaCampeon srcImg={huella} altImg='la casa del campeon 1' />
        </div>
        <div data-aos='fade-up' className='col-lg-6 data'>
          <DataCasaCampeon
            title='La Casa del Campeón'
            subTitle='atracción paga e inmersiva en Miami.'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis'
          />
        </div>
      </div>
      <div className='row content'>
        <div data-aos='fade-up' className='col-lg-6 data'>
          <DataCasaCampeon
            title='La Casa del Campeón'
            subTitle='atracción paga e inmersiva en Miami.'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis'
          />
        </div>
        <div data-aos='fade-up' className='col-lg-6 img'>
          <ImgCasaCampeon srcImg={huella} altImg='la casa del campeon 1' />
        </div>
      </div>
      <div className='row content'>
        <div data-aos='fade-up' className='col-lg-6 img'>
          <ImgCasaCampeon srcImg={huella} altImg='la casa del campeon 1' />
        </div>
        <div data-aos='fade-up' className='col-lg-6 data'>
          <DataCasaCampeon
            title='La Casa del Campeón'
            subTitle='atracción paga e inmersiva en Miami.'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis'
          />
        </div>
      </div>
    </section>
  )
}

export default CasaCampeon
