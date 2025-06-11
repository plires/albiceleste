import { useRef, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import ErrorInput from '@/components/commons/ErrorInput.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '@/components/commons/Loader'
import { validation } from '@/utils/dataUtils'
import 'react-toastify/dist/ReactToastify.css'

import styles from './formulario.module.css'

export default function Formulario() {
  const [loading, setLoading] = useState(false)
  const [wordBtn, setWordBtn] = useState('CONTACTANOS AHORA')
  const [inputSelect, setInputSelect] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const ref = useRef()

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setLoading(true)
    setWordBtn('ENVIANDO...')

    const token = await executeRecaptcha('form_contacto')
    values.recaptchaToken = token

    values.interes = inputSelect

    values.origin = import.meta.env.VITE_NAME_LANDING

    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.has('utm_source')) {
      values.utm_source = urlParams.get('utm_source')
    } else {
      values.utm_source = 'No Set'
    }

    if (urlParams.has('utm_medium')) {
      values.utm_medium = urlParams.get('utm_medium')
    } else {
      values.utm_medium = 'No Set'
    }

    if (urlParams.has('utm_campaign')) {
      values.utm_campaign = urlParams.get('utm_campaign')
    } else {
      values.utm_campaign = 'No Set'
    }

    if (urlParams.has('utm_content')) {
      values.utm_content = urlParams.get('utm_content')
    } else {
      values.utm_content = 'No Set'
    }

    try {
      const res = await axios.post(
        import.meta.env.VITE_ROOT + 'php/process.php',
        values,
      )

      const responseData = res.data

      if (responseData.success) {
        toast.success(responseData.msg_success)
      } else {
        if (Array.isArray(responseData.errors)) {
          responseData.errors.map(error => toast.error(error))
        } else {
          toast.error('Ocurrió un error inesperado.')
        }
      }
    } catch (error) {
      toast.error(
        'Aparentemente en este momento no hay conexión con el servidor, por favor intente más tarde.',
      )
    }

    resetForm()
    setSubmitting(false)
    setLoading(false)
    setWordBtn('ENVIAR MENSAJE')
  }

  const initFormDefault = {
    name: '',
    email: '',
    phone: '',
    comments: '',
    interes: '',
  }

  return (
    <>
      <section className={`${styles.formulario}`}>
        <div id='formulario'>
          <Formik
            innerRef={ref}
            initialValues={initFormDefault}
            validate={validation}
            onSubmit={sendForm}
          >
            {({ handleSubmit, isSubmitting, setFieldValue }) => (
              <Form
                data-aos='fade-up'
                id='form_contacto'
                onSubmit={handleSubmit}
                style={{ position: 'relative' }}
              >
                {loading && <Loader />}
                <div className='row'>
                  <div className={`col-sm-12 mb-4 ${styles.inputContainer}`}>
                    <label htmlFor='name' className={`${styles.label}`}>
                      Nombre
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      type='text'
                      name='name'
                      placeholder=''
                    />
                    <ErrorMessage name='name' component={ErrorInput} />
                  </div>
                  <div className={`col-sm-12 mb-4 ${styles.inputContainer}`}>
                    <label htmlFor='email' className={`${styles.label}`}>
                      Email
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      type='email'
                      name='email'
                      placeholder=''
                    />
                    <ErrorMessage name='email' component={ErrorInput} />
                  </div>
                  <div className={`col-sm-12 mb-4 ${styles.inputContainer}`}>
                    <label htmlFor='phone' className={`${styles.label}`}>
                      Teléfono
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      type='text'
                      name='phone'
                      placeholder=''
                    />
                    <ErrorMessage name='phone' component={ErrorInput} />
                  </div>
                  <div className={`col-sm-12 mb-3 ${styles.inputContainer}`}>
                    <label
                      htmlFor='comments'
                      className={`${styles.label} ${styles.labelComments}`}
                    >
                      Dejanos tu consulta
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      as='textarea'
                      name='comments'
                      rows='4'
                      placeholder=''
                    />
                    <ErrorMessage name='comments' component={ErrorInput} />
                  </div>
                  <div
                    className={`col-sm-12 mb-3 ${styles.inputContainer} ${styles.selectContainer}`}
                  >
                    <Field
                      as='select'
                      name='interes'
                      className={`form-control ${styles.inputSelect} ${styles.input} transition`}
                      onChange={e => {
                        const value = e.target.value
                        setInputSelect(value) // actualizar el estado local
                        setFieldValue('interes', value) // actualizar Formik
                      }}
                    >
                      <option value=''>Seleccioná tu interés</option>
                      <option value='Comercial'>Comercial</option>
                      <option value='Entradas'>Entradas</option>
                      <option value='Merchandising'>Merchandising</option>
                      <option value='Otros'>Otros</option>
                    </Field>
                    <ErrorMessage name='interes' component={ErrorInput} />
                  </div>
                </div>

                <button
                  id='send'
                  className={`btn anton transition ${styles.btnSend}`}
                  type='submit'
                  disabled={isSubmitting}
                >
                  {wordBtn}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  )
}
