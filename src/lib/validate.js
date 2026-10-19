const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validate(values, rules) {
  const errors = {}
  for (const [name, rule] of Object.entries(rules)) {
    const v = (values[name] ?? '').toString().trim()
    if (rule.required && !v) errors[name] = rule.message || 'This field is required.'
    else if (rule.email && v && !EMAIL.test(v)) errors[name] = 'Enter a valid email address.'
    else if (rule.min && v.length < rule.min) errors[name] = `Please write at least ${rule.min} characters.`
  }
  return errors
}
