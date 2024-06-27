import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'
import RouterPublic from "@/pages/public/Public";
import { RouterProvider } from "react-router-dom";
import { GlobalProvider } from './context/globalContext';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <GlobalProvider>
        <RouterProvider router={RouterPublic} />
      </GlobalProvider>
    </I18nextProvider>
  </React.StrictMode>
);