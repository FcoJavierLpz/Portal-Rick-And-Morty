import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: undefined }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Puedes agregar lógica adicional aquí, como enviar información del error a un servicio de seguimiento de errores
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Puedes personalizar este mensaje de error según tus necesidades
      return <div>Error occurred. Please check the console for details.</div>
    }

    return this.props.children
  }
}

export default ErrorBoundary
