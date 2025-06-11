import itemsFanZone from '@/data/fanzone-section.json'
import itemsAlbicelesteItinerante from '@/data/albiceleste-itinerante-section.json'
import itemsCasa from '@/data/casa-section.json'

export const getItemsFanZone = key => itemsFanZone[key]
export const getItemsAlbicelesteItinerante = key =>
  itemsAlbicelesteItinerante[key]
export const getItemsCasa = key => itemsCasa[key]

export const scrollToTop = (setMessage, msg, textAreaRef) => {
  setMessage(msg)

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  setTimeout(() => {
    textAreaRef.focus()
  }, 500)
}

export const validation = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Ingresá un nombre'
  }
  if (!values.email) {
    errors.email = 'Ingresá tu email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Ingresá un correo válido'
  }
  if (!values.phone) {
    errors.phone = 'Ingresá un teléfono'
  }
  if (!values.comments) {
    errors.comments = 'Enviá tu consulta'
  }
  if (!values.interes || !values.interes === '') {
    errors.interes = 'Seleccioná un interés'
  }
  return errors
}

export const getImageURL = name => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
