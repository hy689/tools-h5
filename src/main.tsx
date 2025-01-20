import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import VConsole from 'vconsole';

import router from './routes'
import './main.css'
import StoreProvider from './store/context';

// new VConsole()
createRoot(document.getElementById('root')!).render(
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
)
