import { useState } from 'react'
import { validate } from '../lib/validate.js'
import { submitForm } from '../lib/submitForm.js'

export function useForm(formName, initial, rules) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | unconfigured | error

  function bind(name) {
    return {
      id: `${formName}-${name}`,
      name,
      value: values[name],
      'aria-invalid': errors[name] ? true : undefined,
      'aria-describedby': errors[name] ? `${formName}-${name}-error` : undefined,
      onChange: (e) => {
        setValues((s) => ({ ...s, [name]: e.target.value }))
        if (errors[name]) setErrors((s) => ({ ...s, [name]: undefined }))
      },
    }
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (values.website) return // honeypot
    const errs = validate(values, rules)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = document.getElementById(`${formName}-${Object.keys(errs)[0]}`)
      first?.focus()
      return
    }
    setStatus('sending')
    try {
      const { website, ...data } = values
      const res = await submitForm(formName, data)
      setStatus(res.status)
    } catch {
      setStatus('error')
    }
  }

  function reset() {
    setValues(initial)
    setStatus('idle')
  }

  return { values, errors, status, bind, onSubmit, reset, setStatus }
}
