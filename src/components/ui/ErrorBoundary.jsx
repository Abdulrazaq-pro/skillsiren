import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    if (import.meta.env.DEV) console.error(error, info)
  }
  render() {
    if (this.state.error) {
      return (
        this.props.fallback || (
          <div role="alert" className="rounded-2xl border border-ink-900/10 bg-white p-6 text-sm text-ink-600">
            This part of the page could not be displayed.{' '}
            <button type="button" className="font-medium text-siren-600 underline" onClick={() => this.setState({ error: null })}>
              Try again
            </button>
          </div>
        )
      )
    }
    return this.props.children
  }
}
