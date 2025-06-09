import './data-casa-campeon.css'

const DataCasaCampeon = ({ title, subTitle, description }) => {
  return (
    <div className='dataCasaCampeon'>
      <h2>{title}</h2>
      <h5>{subTitle}</h5>
      <p>{description}</p>
    </div>
  )
}

export default DataCasaCampeon
