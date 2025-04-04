import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@ant-design/v5-patch-for-react-19';

import MoviesProvider from './contex/moviesContext/index.tsx'
import TVSeriesProvider from './contex/tvSeriesContext/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MoviesProvider>
      <TVSeriesProvider>
        <App />
      </TVSeriesProvider>
    </MoviesProvider>
  </StrictMode>,
)
