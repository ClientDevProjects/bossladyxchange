import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUsPage, ContactUsPage, HomePage, ErrorPage } from './pages';
import { WebRoutes } from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ WebRoutes.error } element={ <ErrorPage /> } />
          <Route path={ WebRoutes.home } element={ <HomePage /> } />
          <Route path={ WebRoutes.aboutUs } element={ <AboutUsPage /> } />
          <Route path={ WebRoutes.contactUs } element={ <ContactUsPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
