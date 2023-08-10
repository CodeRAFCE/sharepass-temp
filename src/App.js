
import './App.css';

import Header from './components/Header/Header';
import {Route, Routes, Outlet} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Resources from "./pages/Reasources/Reasources";
import Partners from "./pages/Partners/Partners";
import Pricing from './pages/Pricing/Pricing';
import OurTeam from "./pages/OurTeam/OurTeam";
import BlogDetail from "./pages/blogdetail/BlogDetail";
import EventDetail from "./pages/EventDetail/EventDetail";
import MediaDetail from "./pages/MediaDetail/MediaDetail";
import BlogsList from "./pages/BlogsList/BlogsList";
import EventsList from "./pages/EventsList/EventsList";
import MediasList from "./pages/MediasList/MediasList";
import CaseStudy from './pages/casestudy/CaseStudy';
import Footer from './components/footer/Footer';
import TermsOfService from './pages/termsofservice/TermsOfService';
import Subscription from './pages/subscriptions/Subscription';
import Permitted from './pages/permitted/permitted';
import Privacy from './pages/privacy/Privacy';
import Cookies from './pages/cookies/Cookies';
import FAQ from './pages/faq/FAQ';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Technology from './pages/Technology/Technology';
import Enterprise from './pages/Enterprise/Enterprise';
import RegisterInterest from "./pages/RegisterInterest/RegisterInterest";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import frontendConfigApp from "./assets/js/config";

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='filler'></div>
      <Outlet />
      <Routes>
      <Route index path='/' element={<Home />}  />
      <Route  path='/home' element={<Home />}  />
      <Route path='/about' element={<About />}  />
      <Route path='/resources' element={<Resources />}  />
      <Route path='/resources/:id' element={<BlogDetail />} />
      <Route path='/blog/:id' element={<BlogDetail />} />
      <Route path='/event/:id' element={<EventDetail />} />
      <Route path='/media/:id' element={<MediaDetail />} />
      <Route path='/blogs' element={<BlogsList />} />
      <Route path='/events' element={<EventsList />} />
      <Route path='/medias' element={<MediasList />} />
      <Route path='/casestudy/:id' element={<CaseStudy />} />
      <Route path='/partners' element={<Partners />}  />
      {false && <Route path='/pricing' element={<Pricing />} />}
      <Route path='/ourteam' element={<OurTeam />} />
      <Route path='/terms-of-service' element={<TermsOfService />} />
      <Route path='/subscription-terms' element={<Subscription />} />
      <Route path='/permitted-use-policy' element={<Permitted />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path='/cookies-policy' element={<Cookies />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/register-your-interest' element={<RegisterInterest />} />
      <Route path='/enterprise' element={<Enterprise />} />
      <Route path='/technology' element={<Technology />} />
        <Route path='/signup' element={
          <GoogleReCaptchaProvider reCaptchaKey={frontendConfigApp.recaptcha_site_keys}>
            <Signup />
          </GoogleReCaptchaProvider>
        } />
      <Route path='/signin' element={<Login />} />
    </Routes>
    <Footer />
    </div>
    
  );
}

export default App;
