import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import App from './App.jsx'
import { TodoContextProvider } from './context/todoContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme appearance="dark">
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </Theme>
  </StrictMode>,
)
