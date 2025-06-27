import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouters } from "./routers/AppRouters.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRouters />
  </BrowserRouter>,
)
