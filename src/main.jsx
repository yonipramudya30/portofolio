import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("App crashed:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#020408] text-white p-8 flex flex-col items-center justify-center font-mono">
          <div className="max-w-xl p-6 rounded-2xl bg-red-950/40 border border-red-500/30 text-center">
            <h2 className="text-xl font-bold text-red-400 mb-2">Terjadi kesalahan pada aplikasi</h2>
            <pre className="text-xs text-white/70 p-3 bg-black/50 rounded-lg overflow-x-auto text-left mb-4">
              {this.state.error?.toString()}
            </pre>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 rounded-lg text-xs font-bold">
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
